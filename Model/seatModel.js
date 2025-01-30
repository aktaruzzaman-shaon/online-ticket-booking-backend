const { default: mongoose } = require("mongoose");


const ticketSchema = new mongoose.Schema({
    from: {
        type: String,
        required: [true, "From point is required"],
    },
    to: {
        type: String,
        required: [true, " Destination point is required"],
    },
    // seats: {
    //     type: [Number]
    // },
    seats: {
        type: []
    },

},
    { timestamps: true }
)

const Tickets = mongoose.model("Tickets", ticketSchema)

module.exports = Tickets;