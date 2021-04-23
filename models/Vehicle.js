const mongoose = require('mongoose');

const Vehicle = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    distance_value: { type: Number, required: true },
    vehicle_make: { type: String, required: true },
    vehicle_model: { type: String, required: true },
    vehicle_year: { type: String, required: true },
    vehicle_model_id: { type: String, required: true },
    distance_unit: {type: String, required: true},
    estimated_at: {type: String, required: true},
    carbon_g: { type: Number, required: true },
    carbon_lb: { type: Number, required: true },
    carbon_kg: { type: Number, required: true },
    carbon_mt: { type: Number, required: true }

    
});

module.exports = mongoose.model('Vehicle', Vehicle);