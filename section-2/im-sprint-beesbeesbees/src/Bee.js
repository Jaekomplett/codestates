const Grub = require('./Grub');

class Bee extends Grub {
  constructor(age, color, job){ // 인자가 없어도 된다?
    super();
    this.age = 5;
    this.color = 'yellow';
    //this.food 속성은 상속 받으면서 기본값으로 설정됨.
    this.job = 'Keep on growing';
  }
  
}

module.exports = Bee;
