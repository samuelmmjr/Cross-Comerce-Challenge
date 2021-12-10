const axios = require('axios');
const numbersServices = require('../services/numbers');
const { mergeSort } = require('../utils/orderNumbers')

const extract = async(req, res) => {
    let index = 1

    try {
        while(index < 5) {
            const { data } = await axios(`http://challenge.dienekes.com.br/api/numbers?page=${index}`)
            await numbersServices.create(data.numbers)
            index += 1
            if (data.numbers.length === 0) break
        }
    } catch(error) {
        console.error(error.response)
    } finally {
        const numbersDb = await numbersServices.getAll()
        mergeSort(numbersDb, 0, numbersDb.length - 1)
        res.status(200).json(numbersDb)
    }
}   

module.exports = { extract };
