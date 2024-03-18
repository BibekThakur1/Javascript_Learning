//Date


let myDate= new Date();
// console.log(myDate());
// console.log(myDate.toString());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate=new Date(2024,2,23);
console.log(myCreatedDate.toDateString());
// let myCreatedDate=new Date(2024,23,2);
// console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));