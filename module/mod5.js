var name="RAM"
var age=19

function calc(...x){

   var arr= x.forEach((total,data)=>{
        total=total+data
        return total
    })
    return arr
}
 export {name,age,calc}