const makeExpressCallback  = (controller) => {
    return (req, res) => {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        file: req.file,
        files: req.files,
        headers: {
          'Content-Type': req.get('Content-Type'),
          Referer: req.get('referer'),
          'User-Agent': req.get('User-Agent')
        },
      };
      controller(httpRequest)
        .then(httpResponse => {
          if (httpResponse.headers) {
            res.set(httpResponse.headers);
          }
          //console.log(httpRequest.body);
          res.type('json');
          res.status(httpResponse.statusCode).send(httpResponse.body);
        })
        .catch(e => res.status(500).send({ error: 'An unkown error occurred.', error: e.toString() }));
    };
  };
  
  module.exports = makeExpressCallback;