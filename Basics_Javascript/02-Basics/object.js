
const mySym=Symbol("key1");
console.log(typeof mySym);

const JsUSer={
    name: "Bibek Thakur",
    "fullname":"Bibek Kumar Thakur",
    [mySym]:"Key1",
    age:21,
    location:"Janakpur",
    email: "hustlersbibek@gmail.com",
    isLoggedIn: true,

}

console.log(JsUSer.name);
console.log(JsUSer.email);
console.log(JsUSer["email"]);
console.log(JsUSer[mySym]);
console.log(typeof JsUSer[mySym]);
console.log(JsUSer.fullname);

JsUSer.email="bibek@chatgpt.com"
// Object.freeze(JsUSer); //freeze will not let any chnage in the value of the functions
JsUSer.email="bibek@devin.com"
console.log(JsUSer);
console.log(typeof mySym);
console.log(typeof JsUSer[mySym]);

//now functions of the object

JsUSer.greetings=function(){
    console.log("Good Morning sir!");
};
JsUSer.greetingsTwo=function(){
    console.log(`Good Morning sir ${this.fullname}`);
};

console.log(JsUSer.greetings());
console.log(JsUSer.greetingsTwo());

JsUSer.hello=function(){
    console.log("Hello I am the Boss");
}
console.log(JsUSer.hello());