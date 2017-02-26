var question1 = require('./question1');
var couples = question1.couples;

for(var key in couples){
    console.log(couples[key].boy.name + " is commited to " + couples[key].girl.name + " on " + couples[key].date);
}