const mongoose = require('mongoose');

const Electricity = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    passengers: { type: Number, required: true },
    carbon_mt: { type: Number, required: true },
    carbon_g: { type: Number, required: true },
    carbon_lb: { type: Number, required: true },
    carbon_kg: { type: Number, required: true },
    estimated_at: { type: String, required: true },
    departure_airport: { type: String, required: true },
    destination_airport: { type: String, required: true }
    
});

module.exports = mongoose.model('Electricity', Electricity);