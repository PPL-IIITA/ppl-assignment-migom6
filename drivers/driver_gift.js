var json = require('./../data/gifts.json');
var Gift = require('./../class/gifts.js');

function gifts_driver(){
    let gifts = [] 
    var i = 0;
    for(var key in json){
        gifts[i] = new Gift(
            'gift' + key,
            json[key].type,  
            json[key].price, 
            json[key].value, 
            json[key].lux_rating, 
            json[key].obtain_diff,
            json[key].util_value,
            json[key].util_class
            );
        //console.log(gifts[i]);
        i++;   
    }
    return gifts;
}

var gifts = gifts_driver();
module.exports = {
  gifts
}