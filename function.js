const arr1 = [4,5,7,9,10,11]
const arr2 = [6, 11,22,34,4,3,4]

let max = arr1 [0]
for (let v of arr1){
    if (v>max){
        max =v;
    }
}
//console.log(max)

function findmax (arr){
    let max = arr[0]
    for (let v of arr)
    {
       if (v>max){
        max =v;
    } 
    }
    return max;

}
console.log(findmax(arr1))
console.log(findmax(arr2))