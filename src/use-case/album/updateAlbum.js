const UC_updateAlbum = ({albumDb, updateAlbumEntity}) => {
    return async function patch(data) {

        const { album_id, album_name, album_img, id } = data


    
      
        const prevData = await albumDb.getAlbumbyID({ album_id:id })
    
        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const entity = await updateAlbumEntity({ data })
        const result = await albumDb.updateAlbum({

            album_id:id,
            album_name: entity.getAlbum_name(),
            artist_id:entity.getArtist_id(),
            album_img:entity.getAlbum_img()
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
module.exports = UC_updateAlbum;