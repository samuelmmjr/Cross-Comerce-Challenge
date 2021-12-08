const numbersModels = require('../models/numbers');

const create = async (numbers) => {
    const numbersPage = await numbersModels.create(numbers);
    return numbersPage;
};


async function getAll() {
    const numbers = await numbersModels.getAll();
    return numbers;
}

module.exports = { create, getAll };