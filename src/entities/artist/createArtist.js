const makeArtistEntity = ({ data }) => {

    const { artist_name, artist_img, status  } = data;
         
        if(!artist_name){
            throw new Error("Artist Name is required.")
         }
   
         return Object.freeze({
             getArtist_Name: () => artist_name,
             getArtist_img: () => artist_img
    
         });
    };

module.exports = makeArtistEntity;