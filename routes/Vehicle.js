const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ShipController = require('../api/controllers/vehicle.js');



router.get("/",checkAuth, ShipController.veh_get);

router.post("/",checkAuth, ShipController.veh_create);

module.exports = router;