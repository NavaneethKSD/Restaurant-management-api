const mongoose = require("mongoose");

const restaurentSchema = new mongoose.schema({
    name : {
        type: String,
        required: true
    },

    location : {
        type: String,
        required: true
    },

    cuisine : {
        type: String,
        required: true
    },

    rating : {
        type: Number,
    },

    
})

module.exports = mongoose.model(restaurentSchema);