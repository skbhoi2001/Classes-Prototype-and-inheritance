function MyArray(){
    Object.defineProperty(this,'length',{
      value:0,
      enumerable:false,
      writable:true
    })
  }
  MyArray.prototype.push=function(ele){
    this[this.length]=ele
    this.length++
    return this.length
  }
  
  MyArray.prototype.pop=function(){
    this.length--
    delete this[this.length]
  }
  var arr=new MyArray()
  arr.push(10)
  arr.push(8)
  arr.push(11)
  arr.push(12)
  arr.pop()
  arr.push(15)
  arr.push(18)
  arr.push(10)
  arr.pop()
  for(index in arr){
    console.log(index,arr[index])
  }