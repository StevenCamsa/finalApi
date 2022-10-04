const connect = require('../../config/db')

const playedDb = () =>{
    return Object.freeze({
        getTrack,
        getTrackbyID,
        isExisting,
        createTrack,
        updateTrack,
        updatePlay

    })
};

async function getTrack(){
    const con = await connect()
    const sql = `SELECT track_id, track_name, artist.artist_id, artist_name, album.album_id, album_name, track_img, track_mp3, track_length, play , numberofplays, lastplayed,track.status FROM track, artist, album  WHERE track.artist_id = artist.artist_id AND track.album_id = album.album_id AND track.status = 'active' ORDER BY track_id ASC`

    try {
        const result = await con.query (sql)
        return result.rows
    } catch (error) {
        console.log("Error: ", error);
    }
};

async function getTrackbyID( {track_id} ){
    // console.log(artist_id);
    const con = await connect()
    const sql = `SELECT track_id, track_name, artist.artist_id, artist_name, album.album_id, album_name, track_img, track_mp3, track_length, play, numberofplays, lastplayed,track.status FROM track, artist, album  WHERE track.artist_id = artist.artist_id AND track.album_id = album.album_id AND track_id = $1 AND track.status = 'active' `
    const params = [track_id.id]
    
    try {
        const result = await con.query (sql,params)
        // console.log(result)
        return result.rows

    } catch (error) {
        console.log("Error: ", error);
    }
};

async function isExisting({track_name}) {
    const con = await connect()
    const sql = `SELECT * FROM track WHERE track_name =$1`;
    const params = [track_name];
    try {
        return await con.query(sql, params)

    } catch (error) {
        console.log("Error: ", error);  
    }
};

async function createTrack({track_name,  artist_id, album_id, track_img, track_mp3, numberofplays, track_length, status}){
    const con = await connect()
    const sql = `INSERT INTO track(track_name,  artist_id, album_id, track_img, track_mp3 , numberofplays, track_length, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING *`
    const params = [track_name,  artist_id, album_id, track_img, track_mp3, "0", "0", "active"];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }

};

async function updateTrack({track_name,  artist_id, album_id, track_img, track_id}){
    const con = await connect();
    const sql = `UPDATE track SET track_name= $1, artist_id = $2, album_id = $3, track_img = $4 WHERE track_id = $5 RETURNING *`
    const params = [track_name,  artist_id, album_id, track_img, track_id]
    try {
        const result = await con.query(sql,params)
        return result.rows
    } catch (error) {
        console.log('Error: ',error);
    }
};

async function updatePlay({numberofplays, lastplayed, track_length, track_id}){
   
    const con = await connect();
    const sql = `UPDATE track SET numberofplays = $1 , lastplayed = $2 , track_length = $3 WHERE track_id = $4 RETURNING *`
    const params = [numberofplays, lastplayed, track_length, track_id]
    try {
        const result = await con.query(sql,params)
        return result.rows
    } catch (error) {
        console.log('Error: ',error);
    }
   
};






module.exports = playedDb;
