const connect = require('../../config/db')


const albumDb = () =>{
    return Object.freeze({
        getAlbum,
        isExisting,
        getAlbumbyID,
        createAlbum,
        updateAlbum

    })
}

async function getAlbum(){
    const con = await connect()
    const sql = `SELECT album_id, album_name, artist_name ,album_img, album.status FROM album, artist WHERE album.artist_id = artist.artist_id AND album.status = 'active'`
    try {
        const result = await con.query (sql)
        return result.rows
    } catch (error) {
        console.log("Error: ", error);
    }
};

async function getAlbumbyID( {album_id} ){
    const con = await connect()
    const sql = `SELECT album_id, album_name, artist_name ,album_img, album.status FROM album, artist WHERE album.artist_id = artist.artist_id AND album.album_id = $1 AND album.status = 'active'`
    const params = [album_id.id]
   
    try {
        const result = await con.query (sql,params)
        // console.log(result)
        return result.rows

    } catch (error) {
        console.log("Error: ", error);
    }
};

async function isExisting({album_name}) {
    const con = await connect()
    const sql = `SELECT * FROM album WHERE album_name =$1`;
    const params = [album_name];
    try {
        return await con.query(sql, params)

    } catch (error) {
        console.log("Error: ", error);  
    }
}

async function createAlbum({album_name, artist_id,album_img, status}){
    const con = await connect()
    const sql = `INSERT INTO album(album_name, artist_id, album_img ,status) VALUES ($1, $2, $3, $4) RETURNING *`
    const params = [album_name, artist_id,album_img , "active"];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }
    
};

async function updateAlbum({album_id, album_name, artist_id}){
    const con = await connect();
    const sql = `UPDATE album SET album_name = $1, artist_id = $2 WHERE album_id = $3 RETURNING *`
    const params = [album_name, artist_id, album_id]
    console.log(params);
    try {
        const result = await con.query(sql,params)
        return result.rows
    } catch (error) {
        console.log('Error: ',error);
    }
}


module.exports = albumDb;