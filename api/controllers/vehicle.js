const mongoose = require("mongoose");
const Vehicle = require("../../models/Vehicle");

exports.veh_get = (req, res, next) => {
  
  
    Vehicle.find({ type: req.body.type,distance_unit: req.body.distance_unit,distance_value: req.body.distance_value,vehicle_model_id: req.body.vehicle_model_id}) 
      .then(result => {
        console.log(result);
        
        res.status(201).json({
          Data:result          
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  
exports.veh_create = (req, res, next) => {
  const vehicle = new Vehicle({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    distance_value: req.body.distance_value,
    vehicle_make:req.body.vehicle_make,
    vehicle_model:req.body.vehicle_model,
    vehicle_year:req.body.vehicle_year,
    vehicle_model_id:"7268a9b7-17e8-4c8d-acca-57059252afe9",
    distance_unit: req.body.distance_unit,

    estimated_at: "2020-07-24T02:25:50.837Z",
    carbon_g: req.body.carbon_g,
    carbon_lb: req.body.carbon_lb,
    carbon_kg: req.body.carbon_kg,
    carbon_mt: req.body.carbon_mt
  });
  vehicle
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created successfully",
        Data: {
          _id: result._id,
          type: result.type,
          attributes: [
          {
            type: result.type,
            distance_value: req.body.distance_value,
    vehicle_make:req.body.vehicle_make,
    vehicle_model:req.body.vehicle_model,
    vehicle_year:req.body.vehicle_year,
    vehicle_model_id:"7268a9b7-17e8-4c8d-acca-57059252afe9",
    distance_unit: req.body.distance_unit,

    estimated_at: "2020-07-24T02:25:50.837Z",
    carbon_g: req.body.carbon_g,
    carbon_lb: req.body.carbon_lb,
    carbon_kg: req.body.carbon_kg,
    carbon_mt: req.body.carbon_mt
          }
        ],
          request: {
            type: "GET",
            url: "http://localhost:5000/electricity/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

