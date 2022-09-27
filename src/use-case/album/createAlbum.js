const UC_createAlbum = ({albumDb, makeAlbumEntity, result, upload}) => {

    return async function add (data) {
       
            const {album_name} = data;
            let resu = {};
        

            const isExisting = await albumDb.isExisting({album_name})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("Album name already Exist")
            }

            const entity = await makeAlbumEntity({ data })

             result = function(req, res, next){
                console.log(result);
                const file = req.file.path
                console.log(file);
                
            }
     
     
            // console.log(isExisting)

            const res = await albumDb.createAlbum({
                album_name: entity.getAlbum_Name(),
                artist_id: entity.getArtist_Id(),
                album_img: entity.getalbum_img(result.path)
 
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