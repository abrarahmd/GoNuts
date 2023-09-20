const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/LoginStructure", authController.LoginStructure)

router.post("/SignupStructure", authController.SignupStructure)

router.post("/AdminSignup", authController.AdminSignup)

router.post("/AdminLogin", authController.AdminLogin)

router.post("/AddConcerts", authController.AddConcerts)

router.post("/RemoveConcerts", authController.RemoveConcerts)

router.post("/BuyTickets", authController.BuyTickets)

router.post("/AdminAddBands", authController.AdminAddBands)

router.post("/RemoveBands", authController.RemoveBands)
module.exports = router;