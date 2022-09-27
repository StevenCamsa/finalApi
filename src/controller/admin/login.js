const CON_loginAdmin = ({ loginAdmin }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json",
        };
        try {
            //get the httprequest body
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-agent"];
            const toView = {
                ...info
              };

            const view = await loginAdmin(toView);
            // console.log(result.body);
            return {
                headers: {
                  "Content-Type": "application/json",
                },
                statusCode: 200,
                body: { view },
                message: "Login Successful",
              };
      

        } catch (e) {
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}

module.exports = CON_loginAdmin