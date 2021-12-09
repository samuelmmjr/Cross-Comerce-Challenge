const Connection = require('./connection');

const create = async (numbers) => {
    const db = await Connection();
    const data = await db.collection('numbers')
    .insertOne({ numbersByPage: numbers });
    console.log(numbers.length)
};

const getAll = async () => {
    const db = await Connection();
    const numbers = await db.collection('numbers').find().toArray();
    return numbers;
}

module.exports = { create, getAll };