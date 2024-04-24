const CountryModel = require('../models/country.model');

class CountryService {
    static getAllCountries = async () => {
        try {
            const countries = await CountryModel.find();
            return {
                data: countries,
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CountryService;
