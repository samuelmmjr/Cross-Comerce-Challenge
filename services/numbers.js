const numbersModels = require('../models/numbers');

const create = async (numbers) => {
    const numbersPage = await numbersModels.create(numbers);
    console.log('aqui', numbers);
    return numbersPage;
};

const getAll = async () => {
    const numbers = await numbersModels.getAll();
    const arrNumbers = numbers.map((numberByPage) => {
    return Object.values(numberByPage);
    }).map(([_id, [value]]) => value)
    return arrNumbers
}

module.exports = { create, getAll };