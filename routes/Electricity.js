const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ElecController = require('../api/controllers/electricity');



router.get("/",checkAuth, ElecController.elec_get);

router.post("/",checkAuth, ElecController.elec_create);

module.exports = router;