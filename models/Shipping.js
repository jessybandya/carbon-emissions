const mongoose = require('mongoose');

const Shipping = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    distance_value: { type: Number, required: true },
    distance_unit: { type: String, required: true },
    weight_value: { type: Number, required: true },
    weight_unit: { type: String, required: true },
    estimated_at: { type: String, required: true },
    transport_method: {type: String, required: true},
    carbon_g: { type: Number, required: true },
    carbon_lb: { type: Number, required: true },
    carbon_kg: { type: Number, required: true },
    carbon_mt: { type: Number, required: true }

    
});

module.exports = mongoose.model('Shipping', Shipping);