const mongoose = require('mongoose');

const Fuel1 = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    fuel_source_type: { type: String, required: true },
    fuel_source_unit: { type: String, required: true },
    fuel_source_value: { type: Number, required: true },
    estimated_at: { type: String, required: true },
    carbon_g: { type: Number, required: true },
    carbon_lb: { type: Number, required: true },
    carbon_kg: { type: Number, required: true },
    carbon_mt: { type: Number, required: true }

    
});
module.exports = mongoose.model('Fuel1', Fuel1);