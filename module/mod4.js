var name="ABHI"
var age=3.5
function calc(...y){
    // y=[10,20,30]
    var mult=y.reduce((t,data)=>{
        t=t*data
        return t
    })
    return mult
}
var company="TECPILE TECHNOLOGY"
export default company
// calc(10,20,30)

export {name,age,calc}

