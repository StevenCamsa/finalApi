
const CON_updateAdmin = ({ updateAdmin }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info} = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          id: httpRequest.params.id,
          ...info
        };
        // console.log(toView);
        const view = await updateAdmin(toView);

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
  
  module.exports = CON_updateAdmin;