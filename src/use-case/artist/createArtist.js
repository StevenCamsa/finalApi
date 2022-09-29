const UC_createArtist = ({artistDb, makeArtistEntity}) => {

    return async function add (data) {
       
            const {artist_name} = data;
            let result = {};

            const isExisting = await artistDb.isExisting({artist_name})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("Artist name already Exist")
            }

            const entity = await makeArtistEntity({ data })
     
     
            // console.log(isExisting)

            const res = await artistDb.createArtist({
                artist_name: entity.getArtist_Name(),
                artist_img: entity.getArtist_img()
 
            })
            .catch(e => console.log(e))
            

            if(res){
                return {
                    res,
                    message:"Artist Created"
                }
                
            }else{
                throw new Error ("Failed to register Album");
            }
            
      
        
    }
}
module.exports = UC_createArtist;