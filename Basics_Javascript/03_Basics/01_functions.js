function addtwoNumber(num1,num2){
    let result=num1+num2;
    console.log("bibek");
    return result;
    //after return nothing will run
}

const result1=addtwoNumber(5,3);
console.log(result1);

function sayMyName(){
    console.log("B")
    console.log("I")
    console.log("B")
    console.log("E")
    console.log("K")

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function userlogin(userNamed="BibekBoss"){

    if(userNamed==undefined){
        console.log("Please enter a username");
        return;

    }
    console.log("Hello");
    let result=`${userNamed} just logged in`
    console.log(result);

}

// userlogin("Bibek");

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));