const UC_updatePlay = ({trackDb}) => {
    return async function patch(data) {

        const { numberofplays, id } = data

      
        const prevData = await trackDb.getTrackbyID({ track_id:id })
     
        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const result = await trackDb.updatePlay({
            
            track_id:id,
            numberofplays: numberofplays
         
        })

        .catch(e => console.log("error", e));
    


        if(result){
            return {
                message:"Updated Successfully",
                result
 
            }
        }else{
            throw new Error("Failed to update")

        }
    
        
    }
}
module.exports = UC_updatePlay;