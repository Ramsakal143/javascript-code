// import {calc as a,name as myname,age as myage} from './mod4.js'
import * as mod from './mod4.js'
// import {calc as b,name as abhiname, age as abhiage} from './mod5.js'
import * as add from './mod5.js'

console.log(
    `
    name: ${mod.name}
    age: ${mod.age} present in mod 4 
    `
)

var m=mod.calc(1,2,3,4)
console.log(m)



console.log(
    `
    name: ${add.name}
    age: ${add.age} present in mod 5
    `
)

var sum=add.calc(1,2,3,4)
console.log(sum)


console.log(mod.default)