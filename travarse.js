// // const ar = [1,3,4,6,5]
// for(let i =0; i<arr.length;i++)
{
    // console.log(arr[i])
}

// let sum =0
// for (let i =0; i<arr.length;i++){
//     sum +=arr[i]
// }
// console.log(sum)
// console.log(sum/arr.length)

//find large number
const arr = [1,3,4,60,5]
let largestNumber =arr[0];
for (let i=1;i<arr.length; i++){
    if (arr[i]>largestNumber){
        largestNumber=arr[i]
    }

}
console.log(largestNumber)