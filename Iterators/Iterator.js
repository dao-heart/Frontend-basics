'use strict'

let range = {
    start: 1,
    end: 5
  };

  range[Symbol.iterator] = function(){

    return {
        current: this.start,
        last : this.end,
        next(){
            if (this.current <= this.last){
                return {done:false, value : this.current++}
            }
            else{
                return {done: true}
            }
        }
    }


}

// Iterator.
// for (let i of range){
//     console.log(i)
// }


// Build an Array

let array = {

    0: "Array_item_1",
    1: "Array_item_2",
    2: "Array_item_3",
    length:3

}


array[Symbol.iterator]  = function(){
    return {
        curren:0,
        end:this.length,
        next(){
            if (this.current<this.length){
                return {done:false, value:this.current++}

            }
            else{
                return{done:true}
            }
        }


    }
}
for (let i of array){
    console.log(i)
}