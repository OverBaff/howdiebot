const getBalance = require('./util/getBalance.js');
const setBalance = require('./util/setBalance.js');


(async () => {
	console.log(await setBalance(25, 100));
	console.log(await getBalance(25));
})();