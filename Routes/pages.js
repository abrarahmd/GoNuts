const express = require("express");
const { GetUserData, AuthorizeUser, LoginAdmin } = require("../controllers/auth");
const router = express.Router(); 
const db = require("../db");

router.post("/api/authorizeUser", AuthorizeUser)
router.post("/api/auth", GetUserData)

//ADMIN
router.get("/AdminLogin", (req, res) => {
    res.render("AdminLogin");
}) 
router.get("/AdminSignup", (req, res) => {
    res.render("AdminSignup");
}) 
router.get("/AdminHomepage", (req, res) => {
    res.render("AdminHomepage");
}) 
router.get("/AdminProfile", (req, res) => {
    res.render("AdminProfile");
}) 
router.get("/AdminConcertAddRemove", (req, res) => {
    res.render("AdminConcertAddRemove");
}) 
router.get("/AdminAddConcert", (req, res) => {
    res.render("AdminAddConcert");
}) 
router.get("/AdminRemoveConcert", (req, res) => {
    res.render("AdminRemoveConcert");
}) 
router.get("/AdminBands", (req, res) => {
    res.render("AdminBands");
}) 
router.get("/AdminAddBands", (req, res) => {
    res.render("AdminAddBands");
}) 
router.get("/AdminRemoveBands", (req, res) => {
    res.render("AdminRemoveBands");
}) 
router.post("/AdminAPI", (req, res) => {
    LoginAdmin(req, res) 
}) 
//ADMIN

//Regular Users
router.get("/", (req, res) => {
    res.render("HomePage");
})
router.get("/MyProfile", (req, res) => {
  res.render("MyProfile")
})
router.get("/SignupStructure", (req, res) => {
    res.render("SignupStructure");
})
router.get("/LoginStructure", (req, res) => {
    res.render("LoginStructure");
}) 
router.get("/HomePage", (req, res) => {
    res.render("HomePage");
}) 
router.get("/Tickets", (req, res) => {
    res.render("Tickets");
}) 
router.get("/BuyTickets", (req, res) => {
    res.render("BuyTickets");
}) 
router.get('/Concerts', (req, res) => {
    db.query('SELECT * FROM concert', [], (err, result) => {
        if(err) throw new Error()

        res.render('Concerts', {
            concertData: result
        })
    })
})
router.get('/bands', (req, res) => {
    db.query('SELECT * FROM bands',[],(err,results)=>{
        if(err) throw new Error()
        res.render('bands',{
            bands: results
        })
    })
})
//Regular Users







// ###################  /newband

router.get('/AdminAddBands',(req,res) => {
    res.render('newband');
} );

module.exports = router;