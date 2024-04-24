const CountryService = require('../services/country.service')

const { OK, CREATED, SuccessResponse } = require('../core/success.response')
class CountryController {
    allCountry = async (req, res, next) => {
        new SuccessResponse({
            status_code: 200,
            message:"Get all country",
            data: await CountryService.getAllCountries(req.body)
        }).send(res)
    }
}
module.exports = new CountryController();