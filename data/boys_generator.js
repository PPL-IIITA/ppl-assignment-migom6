var boys_generator = function boys_generator(n){
var obj = '{ \n';
for (i = 0; i < n; i++){
    let intelligence = getRandomInt(1,10);
    let attractiveness = getRandomInt(1,10);
    let budget = getRandomInt(1, 1000);
    let minattractiveness = getRandomInt(1,10);
    let type_no = getRandomInt(1,3);
    let type;

    switch (type_no){
        case 1: type = '"geek"';
                break;
        case 2: type = '"generous"';
                break;
        case 3: type = '"miser"';
                break;
    }
    
     obj = obj + '"'+ i + '"' + ':' + '{' + '\n'
                + '"intelligence":' + intelligence + ',' + '\n'
                + '"attractiveness":' + attractiveness + ',' + '\n'
                + '"budget":' + budget + ',' + '\n'
                + '"minattractiveness":' + minattractiveness + ',' + '\n'
                + '"type":' + type + '\n'
                + '}' + '\n' 
    if(i < n-1){
        obj = obj + ', \n';
    }
    else{
        obj = obj + '}'
    }
    
}

//console.log(obj);
var fs = require('fs');
fs.writeFile("./data/boys.json", obj, function(err) {
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
    boys_generator
}
boys_generator(50);