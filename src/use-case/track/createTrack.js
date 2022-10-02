const UC_createTrack = ({trackDb, makeTrackEntity}) => {

    return async function add (data) {
            const {track_name} = data;
          
            let result = {};

            const isExisting = await trackDb.isExisting({track_name})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("track name already Exist")
            }

            const entity = await makeTrackEntity({ data })
     
     
            // console.log(isExisting)

            const res = await trackDb.createTrack({
                track_name: entity.getTrack_name(),
                artist_id: entity.getArtist_id(),
                album_id: entity.getAlbum_id(),
                track_img: entity.getTrack_img(),
                track_mp3: entity.getTrack_mp3(),
                numberofplays: entity.getnumberofplays()
 
            })
            .catch(e => console.log(e))
            

            if(res){
                return {
                res,
                message:"Track Created"
                }
                
            }else{
                throw new Error ("Failed to register");
            }
            
      
        
    }
}
module.exports = UC_createTrack;