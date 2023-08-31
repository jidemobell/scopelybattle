const express = require("express");
const {protectRoute} = require("../middleware")
const router = express.Router()

const LeadersControl = require("../controller/leadersController")


router.get("/leaders", protectRoute,  async (req, res, next) => {
    await LeadersControl.getAlleaders(req, res, next)
});

module.exports = router;
