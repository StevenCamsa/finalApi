
const CON_updateTrack = ({ updateTrack }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info} = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const imgPath = `${httpRequest.files.image[0].destination}${httpRequest.files.image[0].filename}`
        const songPath = `${httpRequest.files.songs[0].destination}${httpRequest.files.songs[0].filename}`

        info.track_img = imgPath
        info.track_mp3 = songPath

        const toView = {
          id: httpRequest.params.id,
          ...info
        };
        // console.log(toView);
        const view = await updateTrack(toView);

        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body:  view ,
        };


      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  };
  
  module.exports = CON_updateTrack;