const makeAlbumEntity = ({ data }) => {

    const { album_name, artist_id, album_img, status  } = data;


    //      if(!album_name || !artist_id){
    //   throw new Error("Album Name and artist ID are required.")
    //      }
    //     if(!album_name){
    //         throw new Error("Album Name is required.")
    //      }
    //      if(!artist_id){
    //          throw new Error("artist ID is required.")
    //    }


         return Object.freeze({
             getAlbum_Name: () => album_name,
             getArtist_Id: () => artist_id,
             getalbum_img: () => album_img
    
         });
    };

module.exports = makeAlbumEntity;