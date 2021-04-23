const mongoose = require('mongoose');

const CardProfile = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    external_id: { type: String, required: true },
    diet_habit: { type: String, required: true },
    transportation_method: { type: String, required: true },

    
});
module.exports = mongoose.model('CardProfile', CardProfile);