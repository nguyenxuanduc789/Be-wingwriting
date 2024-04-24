const PetsService = require('../services/pets.service')

const { OK, CREATED, SuccessResponse } = require('../core/success.response')
class PetsController {
    // myPets = async (req, res, next) => {
    //     new SuccessResponse({
    //         status_code: 200,
    //         message:"Get all country",
    //         data: await PetsService.getMyPets(req.body)
    //     }).send(res)
    // }
    myDetailPets = async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message:"get detail me",
            data: await PetsService.getDetailPets(req.body)
        }).send(res)
    }
    chat_mascotPets = async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message: "Chat mascot",
            data: await PetsService.postChatMascot(req.body)
        }).send(res)
    }
    exchange_item = async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message:"Exchange item",
            data: await PetsService.exchangeItem(req.body)
        }).send(res)
    }
    getItems= async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message:"get items",
            data: await PetsService.getItems(req.body)
        }).send(res)
    }
}
module.exports = new PetsController();