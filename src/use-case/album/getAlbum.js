const UC_getAlbum = ({ albumDb }) => {
    return async function getAlbum() {
        return albumDb.getAlbum();
    }
}
module.exports = UC_getAlbum;