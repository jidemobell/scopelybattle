const express = require("express");
const {loginToRoute} = require("../middleware")
const router = express.Router()

const PlayerControl = require("../controller/playerController")


router.post("/register",  async (req, res, next) => {
    await PlayerControl.register(req, res, next)
});

router.post("/login", loginToRoute,  async (req, res, next) => {
    res.status(200).json({ "name":'player'})
});

module.exports = router;
