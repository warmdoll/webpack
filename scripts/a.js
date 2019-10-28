
import acss from './a.css'
import c from './c.js'
import $ from 'jquery'
const a={
    init(){
        console.log("a init bbbaaa")
        console.log($)
    },
    cinit(){
       c.init()
    }
}
export default a;