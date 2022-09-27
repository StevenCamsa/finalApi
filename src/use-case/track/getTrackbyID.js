const UC_getTrackbyID = ({ trackDb }) => {
    return async function getTrackbyID(track_id) {
      
        const result = await trackDb.getTrackbyID({track_id})
        .catch(e => console.log("error", e));
        // console.log(result)

        if(result){
         
            return result
        }else{
            throw new Error ("ID not found")
        }
    }
}
module.exports = UC_getTrackbyID;