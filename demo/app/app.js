import express from 'express'
import multer from 'multer'

const app = express()

app.use(multer().array())
app.use('/', express.static(
  process.argv.includes('--coverage') ? 'public_instrumented' : 'public'
))

export default app
