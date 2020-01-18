const Dev = require('../models/Dev')
const SplitStringToArray = require('../utils/SplitStringToArray')

module.exports = {
    async index(request, response){
        const {longitude, latitude, techs} = request.query;
        const techsArray = SplitStringToArray(techs);
        console.log(longitude,latitude)
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            local:{
                $near:{
                    $geometry: {
                        type:'Point',
                        coordinates:[longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        })
        
        return response.json(devs)
    }
}