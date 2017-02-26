var girls_generator = function girls_generator(n){
var obj = '{\n';
for (i = 0; i < n; i++){
    let intelligence = getRandomInt(1,10);
    let attractiveness = getRandomInt(1,10);
    let budget = getRandomInt(1, 1000);
    let type1_no = getRandomInt(1,3);
    let type_no = getRandomInt(1,3);
    let type;
    let type1;

    switch (type1_no){
        case 1: type1 = '"choosy"';
                break;
        case 2: type1 = '"normal"';
                break;
        case 3: type1 = '"desperate"';
                break;
    }

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
                + '"type":' + type1 + ',' + '\n'
                + '"typePrefered":' + type + '\n'
                + '}' + '\n' 
    if(i < n-1){
        obj = obj + ', \n';
    }
    else{
        obj = obj + '}'
    }
    
}

var fs = require('fs');
fs.writeFile("./data/girls.json", obj, function(err) {
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
    girls_generator
}
girls_generator(50);