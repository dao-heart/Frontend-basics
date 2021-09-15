
function merge(left, right){
    let result = []
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft < left.length && indexRight < right.length) {

        
    }


}




funtion mergeSort(arr)
    
{

    if (arr.length ===1){
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}




