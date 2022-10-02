const updateTrackEntity = ({ data }) => {

    const { track_name,  artist_id, album_id, track_img, track_mp3, status  } = data;

        if(!track_name){
            track_name = track_name;
         }
         if(!artist_id){
            artist_id = artist_id;
         }
         if(!album_id){
            album_id = album_id;
         }
         

         return Object.freeze({
             getTrack_name: () => track_name,
             getArtist_id: () => artist_id,
             getAlbum_id: () => album_id,
             getTrack_img: () => track_img,
             getTrack_mp3: () => track_mp3
             
         });
    };

module.exports = updateTrackEntity;