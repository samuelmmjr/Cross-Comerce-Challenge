const numbersServices = require('../services/numbers');

const create = async(req, res) => {
    let index = 1
    let numbers = []

    try {
        while(true) {
            const { data } = await axios(`http://challenge.dienekes.com.br/api/numbers?page=${index}`)
            console.log(numbers)
            await numbersServices.create(data.numbers)
            index += 1
            if (Array.isArray(data.numbers) && data.numbers.length === 0) break
        }
        const numbers = await numbersServices.getAll()
        return res.status(200).json(numbers)
    } catch(error) {
        console.error(error.response)
    }
}



module.exports = { create };
