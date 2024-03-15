const marvel_heros = ["thor", "ironman", "steve"];
const dc_heros = ["superman", "batman", "flash"];

 marvel_heros.push(dc_heros)
 console.log(marvel_heros);
 console.log(marvel_heros[3]);
 console.log(marvel_heros[3][1]);

const heros = marvel_heros.concat(dc_heros)
console.log(heros);
console.log(heros.length);

const new_heros = [...marvel_heros, ...dc_heros]
console.log(new_heros);
console.log(new_heros.length);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);
console.log(another_array.length);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(real_another_array.length);

console.log(Array.isArray(real_another_array)); 

console.log(Array.isArray("Akshay"));
console.log(Array.from("Akshay"));
console.log(Array.from({name : "Akshay"}));  //* interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

