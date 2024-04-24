const express = require('express');
const router = express.Router();
const  PetsController = require('../../controllers/pets.controller')
const { asyncHandler } = require('../../helpers/asyncHandler');
const { authenticationV2 } = require('../../auth/authUtils');
//Sign Up

// router.post('/pets/my_pets', asyncHandler(PetsController.myPets))
router.post('/pets/get_detail_pet', asyncHandler(PetsController.myDetailPets))
router.post('/pets/chat_mascot', asyncHandler(PetsController.chat_mascotPets))
router.post('/pets/exchange_item', asyncHandler(PetsController.chat_mascotPets))

/////////////////////////////

module.exports = router;