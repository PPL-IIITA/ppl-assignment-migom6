var json = require("./boys.json")
class Boy {
    constructor(id, name, intelligence, attractiveness, budget, minattractiveness, type){
        //boy properties
        this.id = id;
        this.name = name;
        this.intelligence = intelligence;
        this.attractiveness = attractiveness;
        this.budget = budget;
        this.minattractiveness = minattractiveness;
        this.type = type;

        this.girl = "not commited"; 
        
    }
}

class Girl {
    constructor(name, intelligence, attractiveness, budget, type){
        this.name = name;
        this.intelligence = intelligence;
        this.attractiveness = attractiveness;
        this.budget = budget;
        this.type = type;

        this.boy = "not commited";
    }
}
function driver(){
    var points = []; 
    var i = 0;
    for(var key in json){
        points[i] = new Boy(
            key, 
            json[key].name, 
            json[key].intelligence, 
            json[key].attractiveness, 
            json[key].budget, 
            json[key].minattractiveness,
            json[key].type
            );
        console.log(points[i]);
        i++;   
    }
}
driver();
//console.log(json);