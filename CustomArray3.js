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
    return this.length
  }
  
  MyArray.prototype.reverseItem=function(){
    var out=[]
    for(var i=this.length;i>0;i--){
      out.push(this[i-1])
      this.pop()
    }
    var top=0
      while(top<out.length){
        this.push(out[top])
        top++  
      }
    return this
  }
  
  MyArray.prototype.first=function(){
  
      return this[0]
    
  }
  var arr=new MyArray()
  
  arr.push('soumyak')
  arr.push('kumar')
  arr.push('bhoi')
  //arr.pop()
  arr.reverseItem()
  
  console.log(Object.values(arr))
  
  console.log(arr.first())