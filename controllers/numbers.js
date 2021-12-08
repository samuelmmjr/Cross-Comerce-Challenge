const axios = require('axios');
const { mergeSort } = require('../utils/orderNumbers')

const extract = async(req, res) => {
    let index = 1
    let numbers = []

    try {
        while(true) {
            const { data } = await axios(`http://challenge.dienekes.com.br/api/numbers?page=${index}`)
            numbers.push(...data.numbers)
            index += 1
            if (data.numbers.length === 0) break
        }
    } catch(error) {
        console.error(error.response)
    } finally {
        res.status(200).json(mergeSort(numbers, 0, numbers.length - 1))
    }
}

module.exports = { extract };
