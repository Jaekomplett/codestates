const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    // this.color : Bee 상속
    // this.food : ./Bee/Grub 상속
    this.honeyPot = 0;
  }
  // eat() : Grub 상속
  makeHoney(){
    return this.honeyPot++;
  }

  giveHoney(){
    return this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
