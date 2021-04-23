const mongoose = require("mongoose");
const Transaction = require("../../models/Transaction");

exports.transaction_get = (req, res, next) => {
  
    // const id = req.params.estimateId;

    Transaction.find({ cents: req.body.cents,external_id: req.body.external_id,merchant_category: req.body.merchant_category,     merchant_category_code: req.body.merchant_category_code,merchant_name: req.body.merchant_name,merchant_country: req.body.merchant_country,merchant_state: req.body.merchant_state,merchant_city: req.body.merchant_city,merchant_postal_code: req.body.merchant_postal_code}) 
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

  exports.transaction_get_all = (req,res,next) =>{
    Transaction.find() 
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
  }
  
exports.transaction_create = (req, res, next) => {
  const card_profile = new Transaction({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    external_id: req.body.external_id,
    carbon_grams:req.body.carbon_grams,
    cents:req.body.cents,
    merchant_name:req.body.merchant_name,
    merchant_category:req.body.merchant_category,
    merchant_category_code:req.body.merchant_category_code,
    merchant_city:req.body.merchant_city,
    merchant_postal_code:req.body.merchant_postal_code,
    merchant_state:req.body.merchant_state,
    merchant_country:req.body.merchant_country,
    currency_iso:req.body.currency_iso,
    calculated_at:"4567-89765DDf-Rt45",
  });
  card_profile
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
            carbon_grams:result.carbon_grams,
            cents: result.cents,
    merchant_name:result.merchant_name,
    currency_iso:result.currency_iso,
    merchant_category:result.merchant_category,
    merchant_category_code:result.merchant_category_code,
    merchant_city:result.merchant_city,
    merchant_postal_code:result.merchant_postal_code,
    merchant_state:result.merchant_state,
    merchant_country:result.merchant_country,
            
          }
        ],
        relationships: [
            {
              id: result.id,
              type: result.type,
              
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

