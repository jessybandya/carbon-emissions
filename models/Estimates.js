const mongoose = require('mongoose');

const Estimates = mongoose.Schema({
    // Electricity
    _id: mongoose.Schema.Types.ObjectId,
    type_elec: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    electricity_unit: { type: String, required: true },
    electricity_value: { type: Number, required: true },
    estimated_atE: { type: String, required: true },
    carbon_gE: { type: Number, required: true },
    carbon_lbE: { type: Number, required: true },
    carbon_kgE: { type: Number, required: true },
    carbon_mtE: { type: Number, required: true },
    //  Flight
    type_flight: { type: String, required: true },
    passengers: { type: Number, required: true },
    departure_airport: { type: String, required: true },
    destination_airport: { type: String, required: true },
    estimated_atF: { type: String, required: true },
    carbon_gF: { type: Number, required: true },
    carbon_lbF: { type: Number, required: true },
    carbon_kgF: { type: Number, required: true },
    carbon_mtF: { type: Number, required: true },
     //shipping
    type_ship: { type: String, required: true },
    distance_value: { type: Number, required: true },
    distance_unit: { type: String, required: true },
    weight_value: { type: Number, required: true },
    weight_unit: { type: String, required: true },
    transport_method: { type: String, required: true },
    estimated_atS: { type: String, required: true },
    carbon_gS: { type: Number, required: true },
    carbon_lbS: { type: Number, required: true },
    carbon_kgS: { type: Number, required: true },
    carbon_mtS: { type: Number, required: true },
     //vehicles
    type_vehicle: { type: String, required: true },
    distance_valueV: { type: Number, required: true },
    vehicle_make: { type: String, required: true },
    vehicle_year: { type: Number, required: true },
    vehicle_model: { type: String, required: true },
    distance_unitV: { type: String, required: true },
    estimated_atV: { type: String, required: true },
    carbon_gV: { type: Number, required: true },
    carbon_lbV: { type: Number, required: true },
    carbon_kgV: { type: Number, required: true },
    carbon_mtV: { type: Number, required: true }
    
});

module.exports = mongoose.model('Estimates', Estimates);