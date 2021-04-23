const mongoose = require("mongoose");
const Shipping = require("../../models/Shipping");

exports.ship_get = (req, res, next) => {
  
  
    Shipping.find({ type: req.body.type,weight_value: req.body.weight_value,weight_unit: req.body.weight_unit,distance_value: req.body.distance_value,distance_unit: req.body.distance_unit,transport_method: req.body.transport_method}) 
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

  
exports.ship_create = (req, res, next) => {
  const shipping = new Shipping({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    distance_value: req.body.distance_value,
    distance_unit:req.body.distance_unit,
    weight_value:req.body.weight_value,
    weight_unit:req.body.weight_unit,
    transport_method:req.body.transport_method,
    
    estimated_at: "2020-07-24T02:25:50.837Z",
    carbon_g: req.body.carbon_g,
    carbon_lb: req.body.carbon_lb,
    carbon_kg: req.body.carbon_kg,
    carbon_mt: req.body.carbon_mt
  });
  shipping
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
            distance_value: result.distance_value,
            distance_unit:result.distance_unit,
            weight_value:result.weight_value,
            weight_unit:result.weight_unit,
            transport_method:result.transport_method,
          estimated_at: "2020-07-24T02:25:50.837Z",
          carbon_g: result.carbon_g,
          carbon_lb: result.carbon_lb,
          carbon_kg: result.carbon_kg,
          carbon_mt: result.carbon_mt,
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

