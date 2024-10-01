const mongoose = require("mongoose")
const suggestionSchema = new mongoose.Schema({
    suggestionNo: Number,
    date: Date,
    memberName: String,
    suggestions: String,
    reason: String
})
module.exports = mongoose.model("suggestion", suggestionSchema)