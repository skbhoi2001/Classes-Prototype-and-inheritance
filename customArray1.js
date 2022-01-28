function MyArray(){
    this.length=0
  }
  MyArray.prototype.push=function(ele){
    this[this.length]=ele
    this.length++
    return this.length
  }
  
  MyArray.prototype.pop=function(){
    delete this[this.length]
    this.length--
    return this.length
  }
  var arr=new MyArray()
  arr.push(10)
  arr.push(8)
  arr.push(11)
  arr.push(12)
  console.log(arr.length)
  arr.pop()
  console.log(arr.length)
  arr.push(15)
  arr.push(18)
  arr.push(10)
  arr.push(17)
  arr.push(16)
  arr.push(166)
  console.log(arr.length)
  arr.pop()
  console.log(arr)
  console.log(arr.length)