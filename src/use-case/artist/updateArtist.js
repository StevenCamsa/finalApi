const UC_updateArtist = ({artistDb, updateArtistEntity}) => {
    return async function patch(data) {

        const { artist_name, artist_img, id } = data


       
      
        const prevData = await artistDb.getArtistID({ artist_id:id })

        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const entity = await updateArtistEntity({ data })
        const result = await artistDb.updateArtist({
            
            artist_id:id,
            artist_name: entity.getArtist_Name(),
            artist_img: entity.getArtist_img()
            
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
module.exports = UC_updateArtist;