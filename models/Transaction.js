const mongoose = require('mongoose');

const Transaction = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    external_id: { type: Number, required: true },
    cents: { type: Number, required: true },
    currency_iso: { type: String, required: true },
    carbon_grams: { type: Number, required: true },
    merchant_name: { type: String, required: true },
    merchant_category: {type: String, required: true},
    merchant_category_code: { type: Number, required: true },
    merchant_city: { type: String, required: true },
    merchant_postal_code: { type: Number, required: true },
    merchant_state: { type: String, required: true },
    merchant_country: { type: String, required: true },
    merchant_country: { type: String, required: true }


    
});

module.exports = mongoose.model('Transaction', Transaction);