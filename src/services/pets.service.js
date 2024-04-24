// const CountryModel = require('../models/country.model');
const petsModel = require('../models/pets.model');
class PetsService {
    static getMyPets = async () => {
        try {
            const countries = await petsModel.find();
            return {
                data: countries,
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PetsService;
