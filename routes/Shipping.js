const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ShipController = require('../api/controllers/shipping.js');



router.get("/",checkAuth, ShipController.ship_get);

router.post("/",checkAuth, ShipController.ship_create);

module.exports = router;