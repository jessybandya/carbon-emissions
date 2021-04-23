const mongoose = require("mongoose");
const Estimates = require("../../models/Estimates");





exports.estimate_get_product = (req, res, next) => {
  const id = req.params.estimateId;
  Estimates.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
         
          Data: {
            _id: doc._id,
            type: doc.type_elec,
            attributes: [
            {
              country: doc.country,
              state:doc.state,
              electricity_unit:doc.electricity_unit,
              weight_unit:doc.weight_unit,
              electricity_value:doc.electricity_value,
            estimated_at: "2020-07-24T02:25:50.837Z",
            carbon_g: doc.carbon_gE,
            carbon_l: doc.carbon_lbE,
            carbon_k: doc.carbon_kgE,
            carbon_m: doc.carbon_mtE,
            }
          ]
           },
          Data: {
            _id: doc._id,
            type: doc.type_flight,
            attributes: [
            {
              passengers: doc.passengers,
              departure_airport:doc.departure_airport,
              destination_airport:doc.destination_airport,
            estimated_at: "2020-07-24T02:25:50.837Z",
            carbon_g: doc.carbon_gF,
            carbon_lb: doc.carbon_lbF,
            carbon_kg: doc.carbon_kgF,
            carbon_mt: doc.carbon_mtF,
            }
          ]
          }
          
          
          // Data: {
          //   _id: result._id,
          //   type: doc.type_ship,
          //   attributes: [
          //   {
          //     distance_value: doc.distance_value,
          //     distance_unit:doc.distance_unit,
          //     weight_value:doc.weight_value,
          //     weight_unit:doc.weight_unit,
          //     transport_method:doc.transport_method,
          //   estimated_at: "2020-07-24T02:25:50.837Z",
          //   carbon_g: doc.carbon_g,
          //   carbon_lb: doc.carbon_lb,
          //   carbon_kg: doc.carbon_kg,
          //   carbon_mt: doc.carbon_mt,
          //   }
          // ]
          // },
          // Data: {
          //   _id: doc._id,
          //   type: doc.type_vehicle,
          //   attributes: [
          //   {
          //     distance_value: doc.distance_valueV,
          //     vehicle_make:doc.vehicle_make,
          //     vehicle_year:doc.vehicle_year,
          //     vehicle_model:doc.vehicle_model,
          //     distance_unit:doc.distance_unitV,
          //     estimated_atV: "2020-07-24T02:25:50.837Z",
          //   carbon_g: doc.carbon_gV,
          //   carbon_lb: doc.carbon_lbV,
          //   carbon_kg: doc.carbon_kgV,
          //   carbon_mt: doc.carbon_mtV,
          //   }
          // ]
          // }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};




exports.estimates_get = (req, res, next) => {
  
  
  Estimates.find() 
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

  
exports.estimates_create = (req, res, next) => {
  const estimates = new Estimates({
    _id: new mongoose.Types.ObjectId(),
    type_elec: req.body.type_elec,
    country: req.body.country,
    state:req.body.state,
    electricity_unit:req.body.electricity_unit,
    electricity_value:req.body.electricity_value,
    estimated_atE: "2020-07-24T02:25:50.837Z",
    carbon_gE: req.body.carbon_gE,
    carbon_lbE: req.body.carbon_lbE,
    carbon_kgE: req.body.carbon_kgE,
    carbon_mtE: req.body.carbon_mtE,

    type_flight: req.body.type_flight,
    passengers: req.body.passengers,
    departure_airport:req.body.departure_airport,
    destination_airport:req.body.destination_airport,
    estimated_atF: "2020-07-24T02:25:50.837Z",
    carbon_gF: req.body.carbon_gF,
    carbon_lbF: req.body.carbon_lbF,
    carbon_kgF: req.body.carbon_kgF,
    carbon_mtF: req.body.carbon_mtF,

    type_ship: req.body.type_ship,
    distance_value: req.body.distance_value,
    distance_unit:req.body.distance_unit,
    weight_value:req.body.weight_value,
    weight_unit:req.body.weight_unit,
    transport_method:req.body.transport_method,
    estimated_atS: "2020-07-24T02:25:50.837Z",
    carbon_gS: req.body.carbon_gS,
    carbon_lbS: req.body.carbon_lbS,
    carbon_kgS: req.body.carbon_kgS,
    carbon_mtS: req.body.carbon_mtS,

    type_vehicle: req.body.type_vehicle,
    distance_valueV: req.body.distance_valueV,
    vehicle_make:req.body.vehicle_make,
    vehicle_year:req.body.vehicle_year,
    vehicle_model:req.body.vehicle_model,
    distance_unitV:req.body.distance_unit,
    estimated_atV: "2020-07-24T02:25:50.837Z",
    carbon_gV: req.body.carbon_gV,
    carbon_lbV: req.body.carbon_lbV,
    carbon_kgV: req.body.carbon_kgV,
    carbon_mtV: req.body.carbon_mtV
  });
  estimates
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created successfully",
        Data: {
          _id: result._id,
          type: result.type_elec,
          attributes: [
          {
            country: result.country,
            state:result.state,
            electricity_unit:result.electricity_unit,
            weight_unit:result.weight_unit,
            electricity_value:result.electricity_value,
          estimated_at: "2020-07-24T02:25:50.837Z",
          carbon_g: result.carbon_gE,
          carbon_lb: result.carbon_lbE,
          carbon_kg: result.carbon_kgE,
          carbon_mt: result.carbon_mtE,
          }
        ]
        },
        Data: {
          _id: result._id,
          type: result.type_flight,
          attributes: [
          {
            passengers: result.passengers,
            departure_airport:result.departure_airport,
            destination_airport:result.destination_airport,
          estimated_at: "2020-07-24T02:25:50.837Z",
          carbon_g: result.carbon_gF,
          carbon_lb: result.carbon_lbF,
          carbon_kg: result.carbon_kgF,
          carbon_mt: result.carbon_mtF,
          }
        ]
        },
        Data: {
          _id: result._id,
          type: result.type_ship,
          attributes: [
          {
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
        ]
        },
        Data: {
          _id: result._id,
          type: result.type_vehicle,
          attributes: [
          {
            distance_value: result.distance_valueV,
            vehicle_make:result.vehicle_make,
            vehicle_year:result.vehicle_year,
            vehicle_model:result.vehicle_model,
            distance_unit:result.distance_unitV,
            estimated_atV: "2020-07-24T02:25:50.837Z",
          carbon_g: result.carbon_gV,
          carbon_lb: result.carbon_lbV,
          carbon_kg: result.carbon_kgV,
          carbon_mt: result.carbon_mtV,
          }
        ]
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

