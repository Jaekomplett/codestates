const Grub = require('./Grub');


class Bee extends Grub {
  constructor(food){
    super(food);
  
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }

  eat(){};
}

module.exports = Bee;
