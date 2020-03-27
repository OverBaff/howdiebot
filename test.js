let getBalance = require("./util/getBalance.js");
let setBalance = require("./util/setBalance.js");


(async () => {
    console.log(await setBalance(25,100));
    console.log(await getBalance(25));
})();