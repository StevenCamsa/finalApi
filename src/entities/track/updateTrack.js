const updateTrackEntity = ({ data }) => {

    const { track_name,  artist_id, album_id, track_img, status  } = data;

     
    if(!track_name){
        throw new Error("Track name is required.")
     }
     if(!artist_id){
        throw new Error("Artist is required.")
     }
     if(!album_id){
        throw new Error("Album  is required.")
     }
         

         return Object.freeze({
             getTrack_name: () => track_name,
             getArtist_id: () => artist_id,
             getAlbum_id: () => album_id,
             getTrack_img: () => track_img
  
             
         });
    };

module.exports = updateTrackEntity;