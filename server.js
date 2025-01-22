
require('dotenv').config({ path: './config.env' })
const port = 4000
const { default: mongoose } = require('mongoose')
const app = require('./app.js')

// db connection mongodb atlas
mongoose.connect(process.env.CONN_STR)
    .then((conn) => console.log("Mongodb connected"))
    .catch((error) => console.log(error))

//db connection mongodb compass
// mongoose.connect(process.env.CONN_STR_COMPASS)
//     .then((conn) => console.log("Mongodb connected"))
//     .catch((error) => console.log(error))

app.listen(port, () => {
    console.log(`Online ticket booking backend is listening on port ${port}`)
})

// dbName  :  ticketbooking

// dbPassword :  rmRIXb9dSld2NKzo

// dbUrl : mongodb+srv://ticketbooking:<db_password>@online-ticket-booking.v1hhp.mongodb.net/?retryWrites=true&w=majority&appName=online-ticket-booking

