class Grub {
  constructor(age, color, food){
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat(){
    return 'Mmmmmmmmm ' + this.food;
  }
}



// function Grub(age, color,food) {

//     this.age = 0
//     this.color = 'pink'
//     this.food = 'jelly'
//   }

//  Grub.prototype.eat = function() {
//     return'Mmmmmmmmm jelly'
//   }







module.exports = Grub;
