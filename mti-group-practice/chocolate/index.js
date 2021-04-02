let result = 0

const Bonus = (cokelat) => {
    if (cokelat>5) {
      bonusAdd = Math.floor(cokelat/5);
      cokelat += Bonus(bonusAdd);
    }
    return cokelat;
};
 console.log(Bonus(1000))
 const test = (testCase, result) => {
     if (testCase !== result) return console.log(false);
     return console.log(true);
 };
 
 test(Bonus(60), 74);
 test(Bonus(100), 124);
 test(Bonus(1000), 1249);
 test(Bonus(1234), 1539);