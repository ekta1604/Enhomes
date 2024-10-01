const mongoose = require("mongoose")

const nonMemberSchema = new mongoose.Schema({
    name: String,
    arrivingTime: String,
    date:String,
    isVisited:String,
    pickup:String,
    deliver:String,
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    },

})

module.exports = mongoose.model("nonmembers", nonMemberSchema)