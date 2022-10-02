const connect = require('../../config/db')


const artistDb = () =>{
    return Object.freeze({
        getArtist,
        getArtistID,
        isExisting,
        createArtist,
        updateArtist,


    })
}

async function getArtist(){
    const con = await connect()
    const sql = `SELECT * FROM artist WHERE status = 'active'`
    try {
        const result = await con.query (sql)
        return result.rows
    } catch (error) {
        console.log("Error: ", error);
    }
};

async function getArtistID( {artist_id} ){
    // console.log(artist_id);
    const con = await connect()
    const sql = `SELECT * FROM artist WHERE artist_id = $1 AND status = 'active'`
    const params = [artist_id.id]
    
    try {
        const result = await con.query (sql,params)
        // console.log(result)
        return result.rows

    } catch (error) {
        console.log("Error: ", error);
    }
};


async function isExisting({artist_name}) {
    const con = await connect()
    const sql = `SELECT * FROM artist WHERE artist_name =$1`;
    const params = [artist_name];
    try {
        return await con.query(sql, params)

    } catch (error) {
        console.log("Error: ", error);  
    }
}

async function createArtist({artist_name, artist_img, status}){
    const con = await connect()
    const sql = `INSERT INTO artist(artist_name, artist_img, status) VALUES ($1, $2, $3) RETURNING *`
    const params = [artist_name, artist_img, "active"];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }
    
};

async function updateArtist({artist_name,artist_img, artist_id}){
    const con = await connect();
    const sql = `UPDATE artist SET artist_name = $1, artist_img = $2 WHERE artist_id = $3 RETURNING *`
    const params = [artist_name, artist_img, artist_id]

    try {
        const result = await con.query(sql,params)
        return result.rows
    } catch (error) {
        console.log('Error: ',error);
    }
}


module.exports = artistDb;