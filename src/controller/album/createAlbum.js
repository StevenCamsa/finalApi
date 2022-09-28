const CON_createAlbum = ({ createAlbum }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const path = `${httpRequest.file.destination}${httpRequest.file.filename}`
        const file = httpRequest.file;
       
        info.album_img = path
        const toView = {
          ...info,
          file
        };
        console.log(toView);
        const view = await createAlbum(toView);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 201,
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
  
module.exports = CON_createAlbum;