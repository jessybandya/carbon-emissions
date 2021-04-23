const mongoose = require("mongoose");
const Fuel = require("../../models/Fuel");

exports.fuel_get = (req, res, next) => {
  
  
    Fuel.find({ type: req.body.type,fuel_source_type: req.body.fuel_source_type,fuel_source_unit: req.body.fuel_source_unit,fuel_source_value: req.body.fuel_source_value}) 
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

  
exports.fuel_create = (req, res, next) => {
  const fuel = new Fuel({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    fuel_source_type: req.body.fuel_source_type,
    fuel_source_unit:req.body.fuel_source_unit,
    fuel_source_value:req.body.fuel_source_value,
    
    estimated_at: "2020-07-24T02:25:50.837Z",
    carbon_g: req.body.carbon_g,
    carbon_lb: req.body.carbon_lb,
    carbon_kg: req.body.carbon_kg,
    carbon_mt: req.body.carbon_mt
  });
  fuel
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
            fuel_source_type: req.body.fuel_source_type,
    fuel_source_unit:req.body.fuel_source_unit,
    fuel_source_value:req.body.fuel_source_value,
    
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

