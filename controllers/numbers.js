const axios = require('axios');
const { mergeSort } = require('../utils/orderNumbers')

const extract = async (req, res) => {
    let index = 1
    let numbers = []


    while (true) {
        try {
            const { data } = await axios(`http://challenge.dienekes.com.br/api/numbers?page=${index}`)
            numbers.push(...data.numbers)
            console.log(index)            
            index += 1
            if (data.numbers.length === 0) break
        } catch (error) {
            console.error(error.response)
        }
    }
    mergeSort(numbers, 0, numbers.length - 1)
    res.status(200).json(numbers)
}

module.exports = { extract };
