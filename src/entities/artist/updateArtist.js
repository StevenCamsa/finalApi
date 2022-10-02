const updateArtistEntity = ({data}) => {

    const {artist_name, artist_img} = data;


    if(!artist_name) {
        artist_name = artist_name;
    }
 
    return Object.freeze({
        getArtist_Name: () => artist_name,
        getArtist_img: () => artist_img
        
    })
}
module.exports = updateArtistEntity;