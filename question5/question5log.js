var question5 = require('./question5');
var couples = question5.couples;

for(var key in couples){
    console.log(couples[key].boy.name + " is commited to " + couples[key].girl.name + " on " + couples[key].date);
}