var driver_gift = require('./../drivers/driver_gift');

var question1 = require('./../question1/question1');

var gifts = driver_gift.gifts;
var couples = question1.couples;

for(i = 0; i < couples.length; i++){
    let budget = couples[i].boy.budget;
    switch(couples[i].boy.type) {
    case "generous":
        gifts_from_generous(i);
        break;
    case "geek":
        gifts_from_geek(i);
        break;
    case "miser":
        gifts_from_miser(i);
        break;
    }
    couples[i].happiness = couples[i].girl.happiness + couples[i].boy.happiness;
    couples[i].compatibility = Math.abs(((budget - couples[i].boy.budget) - couples[i].girl.budget)) +
                                Math.abs((couples[i].boy.attractiveness-couples[i].girl.attractiveness)) +
                                 Math.abs((couples[i].boy.intelligence-couples[i].girl.intelligence))

 }

 function gifts_from_generous(pos){
    
    var gift = gifts.sort(function(a,b){ //sorting descending order
        return b.price - a.price;
     });
     
     let cost = 0;
     for(j = 0; j < gift.length; j++){
        if(couples[pos].boy.budget >= 0 && couples[pos].boy.budget >= gift[j].price){
            couples[pos].boy.budget =- gift[j].price;
            cost = cost + gift[j].price;
            couples[pos].gifts.push(gift[j]);
            
            if(couples[pos].girl.type == 'choosy' && gift.type == 'luxury'){
                cost = cost + 2*gift[j].price;
            }
            else if(couples[pos].girl.type == 'normal'){
                cost = cost + gift[j].value;
            }
            }
            else{
                cost = cost + gift[j].price;
            } 
        } 
        //happiness

     if(couples[pos].girl.type == 'choosy'){
         couples[pos].girl.happiness = Math.log(cost/couples[pos].girl.budget);
     }
     if(couples[pos].girl.type == 'normal'){
         couples[pos].girl.happiness = 2*(cost/couples[pos].girl.budget); 
     }
     if(couples[pos].girl.type == 'desperate'){
        couples[pos].girl.happiness = Math.pow(cost/couples[pos].girl.budget,2);
     }
     
     
     couples[pos].boy.happiness = couples[pos].girl.happiness;
}

function gifts_from_geek(pos){
    
    var gift = gifts.sort(function(a,b){ //sorting ascending order
        return a.price - b.price;
     });
     
     let cost = 0;
     let budget = couples[pos].girl.budget;
     for(j = 0; j < gift.length; j++){
        if(budget >= 0 && couples[pos].boy.budget >= gift[j].price){
            budget =- gift[j].price;
            couples[pos].boy.budget =- gift[j].price;
            couples[pos].gifts.push(gift[j]);
            if(couples[pos].girl.type == 'choosy' && gift.type == 'luxury'){
                cost = cost + 2*gift[j].price;
            }
            else if(couples[pos].girl.type == 'normal'){
                cost = cost + gift[j].value;
            }
            else{
                cost = cost + gift[j].price;
            } 
        }
        if(budget < 0 && gift[j].type == 'Luxury' && couples[pos].boy.budget >= gift[j].price){
            couples[pos].boy.budget =- gift[j].price;
            couples[pos].gifts.push(gift[j]);
            if(couples[pos].girl.type == 'choosy' && gift.type == 'luxury'){
                cost = cost + 2*gift[j].price;
            }
            else if(couples[pos].girl.type == 'normal'){
                cost = cost + gift[j].value;
            }
            else{
                cost = cost + gift[j].price;
            } 
            break;
        } 
     }
     //happiness
     if(couples[pos].girl.type == 'choosy'){
         couples[pos].girl.happiness = Math.log(cost/couples[pos].girl.budget);
     }
     if(couples[pos].girl.type == 'normal'){
         couples[pos].girl.happiness = 2*(cost/couples[pos].girl.budget); 
     }
     if(couples[pos].girl.type == 'desperate'){
        couples[pos].girl.happiness = Math.pow(cost/couples[pos].girl.budget,2);
     }
     
     couples[pos].boy.happiness = couples[pos].girl.intelligence;
}

function gifts_from_miser(pos){

    var gift = gifts.sort(function(a,b){ //sorting ascending order
        return a.price - b.price;
     });
     
     let budget = couples[pos].girl.budget;
     let cost = 0;
     for(j = 0; j < gift.length; j++){
        if(budget >= 0 && couples[pos].boy.budget >= gift[j].price){
            budget =- gift[j].price;
            couples[pos].boy.budget =- gift[j].price;
            couples[pos].gifts.push(gift[j]);
            if(couples[pos].girl.type == 'choosy' && gift.type == 'luxury'){
                cost = cost + 2*gift[j].price;
            }
            else if(couples[pos].girl.type == 'normal'){
                cost = cost + gift[j].value;
            }
            else{
                cost = cost + gift[j].price;
            } 
        }
    }
    if(couples[pos].girl.type == 'choosy'){
         couples[pos].girl.happiness = Math.log(cost/couples[pos].girl.budget);
     }
     if(couples[pos].girl.type == 'normal'){
         couples[pos].girl.happiness = 2*(cost/couples[pos].girl.budget); 
     }
     if(couples[pos].girl.type == 'desperate'){
        couples[pos].girl.happiness = Math.pow(cost/couples[pos].girl.budget,2);
     }
    
    couples[pos].boy.happiness = couples[pos].boy.budget;
}


module.exports = {
    couples
}


