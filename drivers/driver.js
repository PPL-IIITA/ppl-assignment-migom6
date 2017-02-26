var json1 = require('./../data/boys.json');
var json2 = require('./../data/girls.json');
var Boy = require('./../class/boys.js');
var Girl = require('./../class/girls.js');

function boy_driver(){
    let boys = [] 
    var i = 0;
    for(var key in json1){
        boys[i] = new Boy(
            'boy' + key,  
            json1[key].intelligence, 
            json1[key].attractiveness, 
            json1[key].budget, 
            json1[key].minattractiveness,
            json1[key].type
            );
        //console.log(boys[i]);
        i++;   
    }
    return boys;
}

function girl_driver(){
    let girls = [] 
    var i = 0;
    for(var key in json2){
        girls[i] = new Girl(
            'girl' + key,  
            json2[key].intelligence, 
            json2[key].attractiveness, 
            json2[key].budget, 
            json2[key].type,
            json2[key].typePrefered
            );
        //console.log(girls[i]);
        i++;   
    }
    return girls;
}
var boys = boy_driver();
var girls = girl_driver();

module.exports = {
  boys, girls
}
