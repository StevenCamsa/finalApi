const CON_createArtist = ({ createArtist }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];

        const path = `${httpRequest.file.destination}${httpRequest.file.filename}`
     


        info.artist_img = path
        const toView = {
          ...info
       
        };
        console.log(toView);
        const view = await createArtist(toView);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 201,
          body: { view },
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
  
module.exports = CON_createArtist;