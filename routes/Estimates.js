const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const EstController = require('../api/controllers/estimates');



router.get("/",checkAuth, EstController.estimates_get);
router.get('/:estimateId', checkAuth, EstController.estimate_get_product )

router.post("/",checkAuth, EstController.estimates_create);

module.exports = router;