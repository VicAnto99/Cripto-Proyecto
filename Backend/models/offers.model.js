const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Offers = new Schema({
    offers_from: {
        type: String
    },
    offers_to: {
        type: String
    },
    offers_date: {
        type: String
    },
    offers_positions: {
        type: String
    },
    offers_cost: {
        type: String
    },
    offers_comments: {
        type: String
    }
});

module.exports = mongoose.model('Offers', Offers);