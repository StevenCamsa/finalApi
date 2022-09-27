const UC_getArtist = ({ artistDb }) => {
    return async function getArtist() {
        return artistDb.getArtist();
    }
}
module.exports = UC_getArtist;