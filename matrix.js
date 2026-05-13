const matrixa =[[20 ,3],
[32,53],
[50,23]
]


const matrixb =[[2, 43],
[42,43],
[55,33]
]
const matrixSum = (matrixa,matrixb) =>{
    const result = []
    for(let i =0; i<matrixa.length;i++){
        const row =[]
        for( let j=0;j<matrixa[i].length;j++){
            row.push(matrixa[i][j]+matrixb[i][j])
        }
        result.push(row)
    }
    return result;

}
const matrixc =matrixSum(matrixa,matrixb)
console.log(JSON.stringify(matrixc))
