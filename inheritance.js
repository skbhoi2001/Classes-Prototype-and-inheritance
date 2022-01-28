var gParent = {
    fname:"gokula",
    lname:"bhoi"
}

var parent = Object.create(gParent)
parent.fname= "Anil"

var son = Object.create(parent)
son.fname = "Soumyak"

console.log(`My Self ${son.fname} ${son.lname}, 
my father name is ${parent.fname} ${parent.lname} 
and my grandfather name is ${gParent.fname} ${gParent.lname}`)