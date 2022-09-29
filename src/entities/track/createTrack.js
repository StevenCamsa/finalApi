const makeTrackEntity = ({ data }) => {

    const { track_name,  artist_id, album_id, track_img, track_mp3, songduration, time, numberofplays, status  } = data;

        if(!track_name){
            throw new Error("Track name is required.")
         }
         if(!artist_id){
            throw new Error("Artist is required.")
         }
         if(!album_id){
            throw new Error("Album  is required.")
         }
         
         if(!songduration){
            throw new Error("songdu is required.")
         }


         return Object.freeze({
             getTrack_name: () => track_name,
             getArtist_id: () => artist_id,
             getAlbum_id: () => album_id,
             getTrack_img: () => track_img,
             getTrack_mp3: () => track_mp3,
             getsongduration: () => songduration,
             getTime: () => time,
             getnumberofplays:() => numberofplays
             
         });
    };

module.exports = makeTrackEntity;