const Tickets = require("../Model/seatModel")
const { default: response } = require("../Utility/response")


exports.getAllTickets = async (req, res) => {
    const data = await Tickets.find()
    response(res, 200, data)
}

exports.createTicket = async (req, res) => {
    const ticketBody = req.body;
    const data = await Tickets.create(ticketBody)
    response(res, 200, data)
}

exports.updateTicket = async (req, res) => {
    const ticketId = req.params.id;
    const updatedData = req.body;
    const updateTicketData = await Tickets.findByIdAndUpdate(ticketId, updatedData, { new: true })
    response(res, 200, updateTicketData)
}

exports.deleteTicket = async (req, res) => {
    const ticketId = req.params.id;
    const deletedTicketData = await Tickets.findByIdAndDelete(ticketId)
    response(res, 200, deletedTicketData)
}