var question6 = require('./question6');
var couples = question6.couples;
//console.log(couples);
var k = 0;
for (var key in couples) {
    if (k % 6 == 0) {
        console.log("----------------------------------------------------------------------");
        console.log("DAY " + k);
        console.log("----------------------------------------------------------------------");
    }
    console.log(couples[key].boy.name + " is commited to " + couples[key].girl.name + " on " + couples[key].date);
    for (i = 0; i < couples[key].gifts.length; i++) {
        console.log("THE GIFTS ARE " + couples[key].gifts[i].id + " PRICE: " + couples[key].gifts[i].price + "\n");
    }
    k++;
}
