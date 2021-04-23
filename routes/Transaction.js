const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ShipController = require('../api/controllers/transaction.js');



router.post("/",checkAuth, ShipController.transaction_create);

router.get("/api",checkAuth, ShipController.transaction_get);
 router.get("/",checkAuth, ShipController.transaction_get_all);

module.exports = router;