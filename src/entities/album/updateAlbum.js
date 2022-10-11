const updateAlbumEntity = ({data}) => {

    const {album_name, artist_id, album_img} = data;


    if(!album_name) {
        throw new Error("Album Name is required.")
    }
    if(!artist_id){
        throw new Error("Artist ID is required.")
    }

    return Object.freeze({
        getAlbum_name: () => album_name,
        getArtist_id: () => artist_id,
        getAlbum_img:() => album_img
     
    })
}
module.exports = updateAlbumEntity;