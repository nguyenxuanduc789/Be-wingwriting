const PetsService = require('../services/pets.service')

const { OK, CREATED, SuccessResponse } = require('../core/success.response')
class PetsController {
    myPets = async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message:"Get all country",
            data: await PetsService.getMyPets(req.body)
        }).send(res)
    }
}
module.exports = new PetsController();