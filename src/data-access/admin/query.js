const connect = require('../../config/db')

const adminDb = () => {
    return Object.freeze({
        getadmin,
        getAdminbyID,
        loginAdmin,
        isExisting,
        createAdmin,
        updateAdmin
    })
};

async function getadmin(){
    const con = await connect()
    const sql = `SELECT * FROM admin WHERE status ='active' `
    try {
        const result = await con.query (sql)
        return result.rows
    } catch (error) {
        console.log("Error: ", error);
    }
};

async function getAdminbyID({admin_id}) {
    const con = await connect()
    const sql = `SELECT * FROM admin WHERE admin_id = $1 `
    const params = [admin_id.id]
    console.log(params);
try{

    const result = await con.query (sql, params)
    return result.rows

}catch (error){
    console.log("Error: ", error);
}
}


async function loginAdmin({username, password}) {
    const con = await connect()
    const sql = `  SELECT * FROM admin WHERE username = $1 AND password = $2 AND status = 'active' `
    const params = [username, password]

    try {
        const result = await con.query(sql, params)
        return  result

    } catch (error) {
        console.log("Error: ", error); 
    }
};


async function isExisting({username}) {
    const con = await connect()
    const sql = `SELECT name, username, password FROM admin WHERE username = $1 `;

    const params = [username];
    try {
        return await con.query(sql, params)

    } catch (error) {
        console.log("Error: ", error);  
    }
};

async function createAdmin({name, username, password, status}){
    const con = await connect()
    const sql = `INSERT INTO admin(name, username, password, status) VALUES ($1, $2, $3, $4 ) RETURNING *`
    const params = [name, username, password, "active"];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }
    
};

async function updateAdmin({admin_id, name, username, password}){
    const con = await connect();
    const sql = `UPDATE admin SET name = $1, username = $2, password = $3 WHERE admin_id = $4 RETURNING *`
    const params = [name, username, password, admin_id]
    console.log(params);
    try {
        const result = await con.query(sql,params)
        return result.rows
    } catch (error) {
        console.log('Error: ',error);
    }
} 

module.exports = adminDb;