// const CountryModel = require('../models/country.model');
const petsModel = require('../models/pets.model');
const userPetSchema= require('../models/user_pet.model');
class PetsService {
    // static getMyPets = async () => {
    //     try {
    //         const countries = await petsModel.find();
    //         return {
    //             data: countries,
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    static getDetailPets= async () => {
        try {
            const currentUser = req.currentUser;
            const { pet_id } = req.body;
            // chu y mai hoi
            const response = await userPetSchema(currentUser.id, pet_id);
            return{
                data: response
            }
        } catch (error) {
            console.error('Error in get_detail_pet endpoint:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    // static postChatMascot= async () => {
    //     try {
    //         const currentUser = req.currentUser;
    //         const { pet_id, question } = req.body;
    //         const response = await ChatService.chatMascot({
    //             user_name: currentUser.username,
    //             user_id: currentUser.id,
    //             pet_id: pet_id,
    //             question: question,
    //             type_audio: 0
    //         });
    //         return{
    //             data: response
    //         }
    //     } catch (error) {
    //         console.error('Error in chat_mascot endpoint:', error);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //     }
    // }
    // static exchangeItem= async () => {
    //     try {
    //         const currentUser = req.currentUser;
    //         const { pet_id, item_id } = req.body;
    //         const response = await ChatService.exchangeItem(currentUser.id, pet_id, item_id);
    //         return{
    //             data: response
    //         };
    //     } catch (error) {
    //         console.error('Error in exchange_item endpoint:', error);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //     }
    // }
    // static get_Items= async () => {
    //     try {
    //         const currentUser = req.currentUser;
    //         const response = await ChatService.getItems(currentUser.id);
    //         return{
    //             data: response
    //         };
    //     } catch (error) {
    //         console.error('Error in items endpoint:', error);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //     }
    // }
}

module.exports = PetsService;
