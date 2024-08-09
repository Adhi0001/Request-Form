const express =require("express");
const myworkdoc = require ("../controllers/workassignment.controller")
const router =express.Router();


router.post("/mywork",myworkdoc.mywork);

module.exports = router;