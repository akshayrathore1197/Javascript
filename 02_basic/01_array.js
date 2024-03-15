const arr = [1, 2, 3, 4, 5];
const heros = ["Batman", "Superman", "Flash", "Wonder Woman"];
// console.log(arr);
// console.log(heros);

const arr2 = new Array(1, 2, 3, 4);

// console.log(arr[4]);
// console.log(typeof (heros));

arr.push(6);
heros.push("Aquaman");
console.log(arr);
console.log(heros);

arr.pop();
console.log(arr);

arr.unshift(7)
console.log(arr);
arr.shift()
console.log(arr);

console.log(arr.includes(6));
console.log(arr.indexOf(3));
console.log(arr);

const newArr = arr.join()
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// ? slice , splice

console.log("A" , arr);

const n1 = arr.slice(1,3)
console.log(n1);
console.log("B" , arr);

const n2 = arr.splice(1,3)
console.log(n2);
console.log("C" , arr);


