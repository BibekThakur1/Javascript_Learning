//array_2

//we are going to learn concat then spread and also the 


let marvel_heros=["thor","iron-Man","captain"];
let dc_heros=["super-Man","Bat-Man","flash"];

console.log(marvel_heros);
console.log(dc_heros);
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

 let all_heros= marvel_heros.concat(dc_heros);
console.log(all_heros);  //and in this way concat works 

//now let's talk about spread 
let newarr=[...marvel_heros,...dc_heros];
console.log(newarr);

//let's handle the array inside array inside array can be up to infinite times so to handle that we approach it by
const narry=[2,3,[4,5,6,[4.5,3,"Bibek"]],"Thakur",1];
const handle_array=narry.flat(Infinity);
console.log(handle_array);


//to check is this array or not

console.log(Array.isArray("BIBEK"));
console.log(Array.from("BIBEK"));
console.log(Array.from({name:"BIBEK"}));


//now to list different values in one array

let s1=55;
let s2=52;
let s3=54;

console.log(Array.of(s1,s2,s3));
