const UC_createAlbum = ({albumDb, makeAlbumEntity}) => {

    return async function add (data) {
       
            const {album_name, artist_id, album_img} = data;
    
            const isExisting = await albumDb.isExisting({album_name})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("Album name already Exist")
            }

            const entity = await makeAlbumEntity({ data })
     
     
            // console.log(isExisting)

            const res = await albumDb.createAlbum({
                album_name: entity.getAlbum_Name(),
                artist_id: entity.getArtist_Id(),
                album_img: entity.getalbum_img()
 
            })
            .catch(e => console.log(e))
            

            if(res){
                return {
                    res,
                    message:"Album Created"
                }
                
            }else{
                throw new Error ("Failed to register Album");
            }
            
      
        
    }
}
module.exports = UC_createAlbum;