var question2 = require('./question2');
var couples = question2.couples;
console.log(couples);

for(var key in couples){
    console.log(couples[key].boy.name + " is commited to " + couples[key].girl.name + " on " + couples[key].date);
    for(i = 0; i < couples[key].gifts.length; i++){
        console.log("THE GIFTS ARE " + couples[key].gifts[i].id + " PRICE: " + couples[key].gifts[i].price +"\n");
    }
}