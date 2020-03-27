const Keyv = require('keyv');
module.exports = async (id, amount) => {
    const db = new Keyv(process.env.MONEY_DB);
    db.set(id, amount);
};