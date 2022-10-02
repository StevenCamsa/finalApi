const updateAlbumEntity = ({data}) => {

    const {album_name, artist_id, album_img} = data;


    if(!album_name) {
        album_name = album_name;
    }
    if(!artist_id){
        artist_id = artist_id;   
    }

    return Object.freeze({
        getAlbum_name: () => album_name,
        getArtist_id: () => artist_id,
        getAlbum_img:() => album_img
     
    })
}
module.exports = updateAlbumEntity;