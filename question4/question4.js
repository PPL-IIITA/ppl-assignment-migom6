var question2 = require('./../question2/question2');
var couples = question2.couples;

//for least happiest couples

for(i = 0; i < couples.length; i++){
    if(couples[i].happiness < 0){
        couples[i].boy.status = "single";
        couples[i].girl.status = "single";
        var date = new Date();
        console.log("Couple "+ couples[i].boy.name + " and " + couples[i].girl.name + " broke up at "+ date);
    }
}

