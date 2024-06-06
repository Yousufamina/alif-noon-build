const { createServer } = require('https')
const { parse } = require('url')
const cors = require('cors')
const next = require('next')

// import { dbConnect } from "@/src/dbConnect";

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
app.use(cors());
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      // Enable CORS
      app.use(cors());
      if (pathname === '/') {
        console.log("called")
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
      app.use(cors());
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500 
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    // const con=dbConnect();
  })
})
