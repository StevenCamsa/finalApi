const UC_updatePlay = ({trackDb}) => {
    return async function patch(data) {

        const { numberofplays, track_length, id } = data
        
        // let lastplayed = Date(Date.now()) 
        // const lastplayed = Date(Date.now())

        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); 
        const currentYear = currentDate.getFullYear();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentSecond = currentDate.getSeconds();

        
        const lastplayed = currentYear + "/" + (currentMonth + 1) + "/" + currentDayOfMonth + " " + currentHour  + ":" + currentMinute  + ":" + currentSecond;
     
        // console.log(lastplayed);



        const prevData = await trackDb.getTrackbyID({ track_id:id })
     
        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const result = await trackDb.updatePlay({
            
            track_id:id,
            numberofplays: numberofplays,
            lastplayed:lastplayed,
            track_length:track_length
         
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