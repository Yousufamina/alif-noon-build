const cors = require('cors');

const corsOptions = {
  origin: '*', // or specify specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // optional
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;