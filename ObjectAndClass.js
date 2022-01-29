class Circumference {
    constructor(side1, side2) {
      this.perimenter = side1 * side2;
    }
  }

  class Circle extends Circumference {
    constructor(radius) {
      super(44 / 7, radius);
    }
  }
console.log(new Circle(4))


class Calculator{
    constructor(a,b,c){
        if(c === 1){
            this.add = a+b
        }
        if(c === 2){
            this.subtrac = a-b
        }
        if(c===3){
            this.divide = Math.floor(a/b)
        }
        if(c === 4){
            this.mul = a*b
        }
    }
}

class Data extends Calculator{
    constructor(a,b,c){
        super(a,b,c)
    }
}

console.log(new Data(10,4,4))

