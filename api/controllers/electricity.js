const mongoose = require("mongoose");
const Electricity = require("../../models/Electricity");

exports.elec_get = (req, res, next) => {
  
  
    Electricity.find({ passengers: req.body.passengers,type: req.body.type}) 
      .then(doc => {
        console.log(doc);
        if(doc){
          res.status(201).json({
            Data:doc          
          });
        }
       
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

exports.elec_create = (req, res, next) => {
  const electricity = new Electricity({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    passengers: req.body.passengers,
   departure_airport:req.body.departure_airport,
   destination_airport:req.body.destination_airport,
   departure_airport:req.body.destination_airport,
   destination_airport:req.body.departure_airport,
    
    estimated_at: "2020-07-24T02:25:50.837Z",
    carbon_g: req.body.carbon_g,
    carbon_lb: req.body.carbon_lb,
    carbon_kg: req.body.carbon_kg,
    carbon_mt: req.body.carbon_mt
  });
  electricity
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created successfully",
        Data: {
          _id: result._id,
          type: result.type,
          attributes: [
              {passengers: result.passengers},
              {legs: [{departure_airport:result.departure_airport,destination_airport:result.destination_airport},{departure_airport:result.destination_airport,destination_airport:result.departure_airport}]}
          ],
          estimated_at: "2020-07-24T02:25:50.837Z",
          carbon_g: result.carbon_g,
          carbon_lb: result.carbon_lb,
          carbon_kg: result.carbon_kg,
          carbon_mt: result.carbon_mt,

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

   