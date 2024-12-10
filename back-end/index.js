const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// Increase the request size limit
app.use(express.json({ limit: '50mb' })) // Adjust the limit value as needed
app.use(express.urlencoded({ limit: '50mb', extended: true })) // Adjust the limit value as needed
app.use(cookieParser())

app.use("/api", router)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})



