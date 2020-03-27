const Keyv = require('keyv');
module.exports = async id => {
    const db = new Keyv(process.env.MONEY_DB);
    return (await db.get(id)) || 0;
};