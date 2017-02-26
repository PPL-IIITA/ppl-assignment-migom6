var gifts_generator = function gifts_generator(n){
var obj = '{ \n';

for (i = 0; i < n; i++){
    let price = getRandomInt(100,800);
    let value = getRandomInt(100,800);
    let lux_rating = getRandomInt(50,200);
    let obtain_diff = getRandomInt(50,200);
    let util_value = getRandomInt(1,10);
    let util_class = getRandomInt(1,10);
    let type_no = getRandomInt(1,3);
    let type;

    switch (type_no){
        case 1: type = '"Essential"';
                lux_rating = 0;
                obtain_diff = 0;
                util_value = 0;
                util_class = 0;
                break;
        case 2: type = '"Luxury"';
                util_value = 0;
                util_class = 0;
                break;
        case 3: type = '"Utility"';
                lux_rating = 0;
                obtain_diff = 0;
                break;
    }
    
     obj = obj + '"'+ i + '"' + ':' + '{' + '\n'
                + '"type":' + type + ',' + '\n'
                + '"price":' + price + ',' + '\n'
                + '"value":' + value + ',' + '\n'
                + '"lux_rating":' + lux_rating + ',' + '\n'
                + '"obtain_diff":' + obtain_diff + ',' + '\n'
                + '"util_value":' + util_value + ',' + '\n'
                + '"util_class":' + util_class + '\n'
                + '}' + '\n' 
    if(i < n-1){
        obj = obj + ', \n';
    }
    else{
        obj = obj + '}'
    }
    
}

var fs = require('fs');
fs.writeFile("./data/gifts.json", obj, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}

module.exports = {
    gifts_generator
}
gifts_generator(200);