const UC_getAllAdmin = ({ adminDb }) => {
    return async function getadmin() {
        return adminDb.getadmin();
    }
}
module.exports = UC_getAllAdmin;