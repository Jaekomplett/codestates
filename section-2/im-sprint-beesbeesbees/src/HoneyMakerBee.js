const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  constructor(age, job, color, food, honeyPot) {
    super(color, food)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;

  }
  
  eat(){}
  makeHoney(){
    this.honeyPot++

  }
  giveHoney(){
    this.honeyPot--
  }
  
}

module.exports = HoneyMakerBee;
