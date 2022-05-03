const arr1 = [1,2,4,5];
const arr2 = [2,4,6,7];

//Task 1
const res1 = [...new Set([...arr1, ...arr2])];
console.log(res1);

//Task 2
const res2 = arr1.filter(num => (num > 0 && num % 2 === 0));
console.log(res2);

//Task 3
if(arr1.indexOf(0) !== -1){
    console.log('Array has zero value');
}

//Task 4
console.log(arr1.indexOf(5));

//Task 5
let product = arr1.reduce((prev, cur) => {
    return prev * cur;
});
console.log(product);

//Task 6
let arr6_1 = ['a', 'c', 'b', 'aa','d'];
arr6_1.sort();
console.log(arr6_1);

let arr6_2 = [-5,6,1,3,0,5,2];
arr6_2.sort((a,b) => {
    return Math.abs(a) - Math.abs(b);
});
console.log(arr6_2);


