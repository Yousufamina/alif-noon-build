import Cors from 'next/cors';

const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: '*',
  credentials: true,
});

export default cors(async function middleware(req, res) {
  return cors(req, res, async () => {
    // Continue to next middleware or API route
  });
});