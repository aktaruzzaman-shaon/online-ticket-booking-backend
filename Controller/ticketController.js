const Tickets = require("../Model/seatModel")


exports.getAllTickets = (req, res) => {
    res.send("All ticket received")
}

exports.createTicket = async (req, res) => {
    const ticketBody = req.body;
    console.log(ticketBody)
    const resData = await Tickets.create(ticketBody)
    // console.log(resData)
    res.send("Ticket Created")
}