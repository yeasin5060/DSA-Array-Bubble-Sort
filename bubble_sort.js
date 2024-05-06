//array bubble sort
function bubbleSort(arr){
    let temp = 0
    for(let i = 0 ; i < arr.length ; i++){ //this ia a outer loop and first loop
        for(let j = 0 ; j < arr.length - 1 - i ; j++){ //this ia a inner loop and second loop
             if( arr[j] > arr[j + 1]){ //condition
                temp = arr[j]
                arr[j] = arr[ j + 1]
                arr[j + 1] = temp
             }
        }
    }
    return arr
}

let arr = [ 10 , 5 , 20 , 15 , 30 , 25 , 40 , 35]
let result = bubbleSort(arr)
console.log(result);