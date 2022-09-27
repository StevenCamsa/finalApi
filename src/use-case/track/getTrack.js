const UC_getTrack = ({ trackDb }) => {
    return async function getTrack() {
        return trackDb.getTrack();
    }
}
module.exports = UC_getTrack;