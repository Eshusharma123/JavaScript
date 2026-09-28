const accountID = 12324;
let accountEmail = "Eshu@google.com";
var accountPassword = "123444";
accountCity = "Jaipur";
let accountState;

accountEmail = "hs@hc.com";
accountPassword = "21323";
accountCity = "Hydrabad";

/*
Prefer to not use var
because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);