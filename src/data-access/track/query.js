const connect = require('../../config/db')

const playedDb = () =>{
    return Object.freeze({
        getTrack,
        getTrackbyID,
        isExisting,
        createTrack

    })
};

async function getTrack(){
    const con = await connect()
    const sql = `SELECT track_id, track_name, artist_name, album_name, track_img, track_mp3, songduration, time, numberofplays, track.status FROM track, artist, album  WHERE track.artist_id = artist.artist_id AND track.album_id = album.album_id AND track.status = 'active' `

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
    const sql = `SELECT track_id, track_name, artist_name, album_name, track_img, track_mp3, songduration, time, numberofplays, track.status FROM track, artist, album  WHERE track.artist_id = artist.artist_id AND track.album_id = album.album_id AND track_id = $1 AND track.status = 'active' `
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

async function createTrack({track_name,  artist_id, album_id, played_id, location, songduration, numberofplays, status}){
    const con = await connect()
    const sql = `INSERT INTO track(track_name,  artist_id, album_id, played_id, location, songduration, numberofplays, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING *`
    const params = [track_name,  artist_id, album_id, played_id, location, songduration, numberofplays,  "active"];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }

    
};




module.exports = playedDb;
