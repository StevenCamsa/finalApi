const makeTrackEntity = ({ data }) => {

    const { track_name,  artist_id, album_id, track_img, track_mp3, numberofplays, status  } = data;

        if (!track_name && !artist_id && !album_id) {
            throw new Error("Track name, Artist ID, and album ID are required.")
        }
        if (!track_name && !artist_id ) {
            throw new Error("Track name and Artist ID are required.")
        }
        if (!artist_id && !album_id) {
            throw new Error("Artist ID, and album ID are required.")
        }
        if (!track_name && !album_id) {
            throw new Error("Track name and album ID are required.")
        }
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
             getTrack_img: () => track_img,
             getTrack_mp3: () => track_mp3,
             getnumberofplays:() => numberofplays
             
         });
    };

module.exports = makeTrackEntity;