const UC_getAlbumbyID= ({ albumDb }) => {
    return async function getAlbumbyID(album_id) {
      
        const result = await albumDb.getAlbumbyID({album_id})
        .catch(e => console.log("error", e));
        // console.log(result)

        if(result){
         
            return result
        }else{
            throw new Error ("ID not found")
        }
    }
}
module.exports = UC_getAlbumbyID;