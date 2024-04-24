const express = require('express');
const router = express.Router();
const  PetsController = require('../../controllers/pets.controller')
const { asyncHandler } = require('../../helpers/asyncHandler');
const { authenticationV2 } = require('../../auth/authUtils');
//Sign Up

router.post('/pets/my_pets', asyncHandler(PetsController.myPets))


/////////////////////////////

module.exports = router;