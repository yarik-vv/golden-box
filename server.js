const static = require('node-static');
const development = new static.Server('./development');

require('http').createServer(function (request, response) {
  if (!/\./.test(request.url)) {
    request.url = '/';
  }
  development.serve(request, response);
}).listen(3000, () => {
  console.log('[goldenbox.org]: Server listening on http://localhost:3000');
});
