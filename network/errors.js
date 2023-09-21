const response = require('./response');
function errors (err, req, res, next) {
  console.error('[err]', err);
  const message = err.message ?? 'Error interno';
  const status = err.statusCode ?? 500;
  response.error(req, res, message, status);
}

export default errors;
