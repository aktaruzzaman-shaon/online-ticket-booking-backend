const express = require("express")
const ticketsRouter = require("./routes/ticketRouter")
const app = express()

app.use(express.json())

app.use('/alltickets/', ticketsRouter)


module.exports = app