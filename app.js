const express = require("express")
const ticketsRouter = require("./routes/ticketRouter")
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/alltickets/', ticketsRouter)

module.exports = app