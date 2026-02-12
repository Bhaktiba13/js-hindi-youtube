const accountId=144553
let accountEmail="bhaktiba@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// Second time const ma value change n thy ske ek vr set thy gy pachi change n thy
// accountId=2

accountEmail="by@google.com"
accountPassword="67891"
accountCity="Mumbai"

console.log(accountId);
//Ghani badhi var console.log n lakhvu pde ena mate console.table use krvu
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


//prefer not to use var
//because of issue in block scope{} and functional scope