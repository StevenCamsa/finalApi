const UC_updateTrack = ({trackDb, updateTrackEntity}) => {
    return async function patch(data) {

        const { track_name,  artist_id, album_id, track_img, track_mp3, numberofplays,id } = data


       
      
        const prevData = await trackDb.getTrackbyID({ track_id:id })
   
        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const entity = await updateTrackEntity({ data })
        const result = await trackDb.updateTrack({
            
            track_id:id,
            track_name: entity.getTrack_name(),
            artist_id: entity.getArtist_id(),
            album_id: entity.getAlbum_id(),
            track_img: entity.getTrack_img()


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
module.exports = UC_updateTrack;