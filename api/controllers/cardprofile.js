const mongoose = require("mongoose");
const CardProfile = require("../../models/CardProfile");

exports.card_profile_get = (req, res, next) => {
  
    // const id = req.params.estimateId;

    CardProfile.find({ external_id: req.body.external_id,diet_habit: req.body.diet_habit,transportation_method: req.body.transportation_method}) 
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

  
  
exports.card_profile_create = (req, res, next) => {
  const card_profile = new CardProfile({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    external_id: req.body.external_id,
    diet_habit:req.body.diet_habit,
    transportation_method:req.body.transportation_method,
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
            type: result.type,
            external_id: result.external_id,
            diet_habit:result.diet_habit,
            transportation_method:result.transportation_method,
            
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

exports.card_profile_update_product = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    CardProfile.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Product updated",
          request: {
            type: "GET",
            url: "http://localhost:4000/products/" + id
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
  
  exports.card_profile_delete = (req, res, next) => {
    const id = req.params.productId;
    CardProfile.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Product deleted",
          request: {
            type: "POST",
            url: "http://localhost:4000/products",
            body: { name: "String", price: "Number" }
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