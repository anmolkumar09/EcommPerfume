const express = require("express")
const router = express.Router();

const {sendEmail} = require("../config/config");

router.post('/sendEmail',sendEmail)

module.exports = router