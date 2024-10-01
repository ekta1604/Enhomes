const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
    placeName : String,
    rent : String
})

module.exports = mongoose.model("Place", placeSchema)