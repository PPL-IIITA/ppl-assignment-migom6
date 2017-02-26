module.exports = class Girl {
    constructor(name, intelligence, attractiveness, budget, type, typePrefered){
        this.name = name;
        this.intelligence = intelligence;
        this.attractiveness = attractiveness;
        this.type = type;
        this.happiness = 0;
        //critereon to pair
        this.status = 'single';
        this.budget = budget; 
        this.typePrefered = typePrefered;
    }
   
}