const { default: mongoose } = require("mongoose");

// Seat Schema ==========================================
const seatSchema = new mongoose.Schema({
    seatNumber: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true },
    price: { type: Number, default: 700 }
})

// Ticket Schema =======================================
const ticketSchema = new mongoose.Schema({
    from: {
        type: String,
        required: [true, "From point is required"],
    },
    to: {
        type: String,
        required: [true, " Destination point is required"],
    },
    busType: {
        type: String,
        require: [true, "Bus Time Needed"]
    },
    dateAndTime: {
        type: "String",
        required: [true, "Date and time needed"]
    },
    seats: {
        type: [seatSchema],
        required: true,
    }

},
    { timestamps: true }
)

const Tickets = mongoose.model("Tickets", ticketSchema)

module.exports = Tickets;