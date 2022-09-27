const UC_getArtistID = ({ artistDb }) => {
    return async function getArtistID(artist_id) {
        // console.log(artist_id);
        const result = await artistDb.getArtistID({artist_id})
        .catch(e => console.log("error", e));
        // console.log(result)

        if(result){
         
            return result
        }else{
            throw new Error ("ID not found")
        }
    }
}
module.exports = UC_getArtistID;