const express = require('express')
const ticketsRouter = express.Router();
const ticketController = require("../Controller/ticketController")

ticketsRouter.route('/')
    .get(ticketController.getAllTickets)
    .post(ticketController.createTicket)

ticketsRouter.route('/:id')

module.exports = ticketsRouter