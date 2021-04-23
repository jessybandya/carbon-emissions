const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const FuelController = require('../api/controllers/fuel.js');



router.get("/",checkAuth, FuelController.fuel_get);

router.post("/",checkAuth, FuelController.fuel_create);

module.exports = router;