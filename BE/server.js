import { PORT } from './constants/core.js'
import express from 'express'
import { Auth } from './src/auth/auth.js'
import { Profile } from './src/user/profile.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT)

Auth(app)
Profile(app)