const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ElecController = require('../api/controllers/cardprofile');



router.get("/",checkAuth, ElecController.card_profile_get);

router.post("/",checkAuth, ElecController.card_profile_create);
router.delete("/:productId",checkAuth, ElecController.card_profile_delete);
router.patch("/:productId",checkAuth, ElecController.card_profile_update_product);


module.exports = router;