const Bee = require('./Bee');

class ForagerBee extends Bee{
  constructor(age, job, color, food, canFly, treasureChest){
    super(food, color); // 상속된 키워드
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

  }
  
  eat(){}
  forage(){
    // this.treasureChest = [];
    // this.treasureChest.push('pollen', 'flowers', 'gold')
    this.treasureChest[0] = 'pollen';
    this.treasureChest[1] = 'flowers';
    this.treasureChest[2] = 'gold';
  }
  
}

module.exports = ForagerBee;
