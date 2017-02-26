var driver = require('./../drivers/driver');
var boys = driver.boys;
var girls = driver.girls;
var Couple = require('./../class/couple.js');



function couple_driver(){
    let couples = [];
    var k = 0;
    for(i = 0; i < girls.length; i++){
        for(j = 0;  j < boys.length; j++){
            if( girls[i].budget <= boys[j].budget &&
                girls[i].typePrefered == boys[j].type && 
                girls[i].attractiveness >= boys[j].minattractiveness && 
                boys[j].status != 'commited'){
                couples[k] = new Couple('C'+k, girls[i], boys[j]);
                k++;
                break;
            }
        }
    }
    return couples;
}

var couples = couple_driver();
module.exports = {
    couples
}
