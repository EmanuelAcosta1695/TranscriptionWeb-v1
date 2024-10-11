import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import gatewayTranscriptionRoute from './routes/gatewayTranscription.route'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

const corsOptions = {
  origin: process.env.FRONT,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/gatewayTranscription', gatewayTranscriptionRoute)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
