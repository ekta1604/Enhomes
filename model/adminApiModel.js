const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },

})

module.exports = mongoose.model("AdminApi", adminSchema)