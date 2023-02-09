const {getApiInfo} = require('./getApiInfo')

const getCountries = async (req, res, next) => {
    try {
        const {name} = req.query 

        const infoBD = await getApiInfo()

        if(name){
           const countryFind = infoBD.filter(e => e.name.toLowerCase()?.includes(name.toLowerCase()))
         
        if(countryFind.length) {
            res.status(200).json(countryFind)
        } else {
            res.status(400).send('pais no existe')
        }

        } else {
            res.status(200).json(infoBD)
        }

    } catch (error) {
        next(error)
    }
}

module.exports = {getCountries}