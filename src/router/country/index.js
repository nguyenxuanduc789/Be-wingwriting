const express = require('express');
const router = express.Router();
const  CountryController = require('../../controllers/country.controller')
const { asyncHandler } = require('../../helpers/asyncHandler');
const { authenticationV2 } = require('../../auth/authUtils');
//Sign Up

router.post('/country/list_all_country', asyncHandler(CountryController.allCountry))


/////////////////////////////

module.exports = router;