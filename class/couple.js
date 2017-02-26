module.exports = class Couple {
    constructor(id, girl, boy){
        this.id = id;
        this.girl = girl;
        this.boy = boy;
        this.gifts = [];
        this.type = [girl.type, boy.type];
        this.happiness = 0;
        this.compatibility = 0;
        girl.status = "commited";
        boy.status = "commited";
        this.date = new Date();
    }
}
