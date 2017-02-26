'use strict';
module.exports = class Boy {
    constructor(name, intelligence, attractiveness, budget, minattractiveness, type){
        this.name = name;
        this.intelligence = intelligence;
        this.attractiveness = attractiveness;
        this.type = type;
        this.happiness = 0;
        //critereon to pair
        this.status = 'single';
        this.budget = budget;
        this.minattractiveness = minattractiveness;   
    } 
}
	
