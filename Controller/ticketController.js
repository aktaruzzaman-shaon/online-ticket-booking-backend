const Tickets = require("../Model/seatModel")
const response = require("../Utility/response")

exports.getAllTickets = async (req, res) => {
    const { from: startingSite, to: destinationSite } = req.query;
    const data = await Tickets.find({ from: startingSite, to: destinationSite })
    response(res, 200, data)
}

exports.createTicket = async (req, res) => {
    const ticketBody = req.body;
    console.log(ticketBody,"ticket body")
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