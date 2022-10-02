
const CON_updateArtist = ({ updateArtist }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info} = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const path = `${httpRequest.file.destination}${httpRequest.file.filename}`
        info.artist_img = path

        const toView = {
          id: httpRequest.params.id,
          ...info
        };
        // console.log(toView);
        const view = await updateArtist(toView);

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
  
  module.exports = CON_updateArtist;