
//simple closure
function x(){
    var a = 15;
    function y(){
        console.log(a);
    }

    y();
}
x();

//closure more complicated
function x1(){
    var b = 23;
    function y1(){
        console.log(b);
    }

    return y1;
}

const z = x1();
console.log(z);
z();

// settimeout + closure 

function x2(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}

x2(); // it will print 6 five times because of closure and var is function scoped

// to solve this problem we can use let instead of var because let is block scoped


function outest(){
    var c = 100;
    function outer(b){
        
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }

    return outer;
}

var close = outest()("hello world");
close();

//counter example 
function makeCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }

    function decrement(){
        count--;
        console.log(count);
    }

    return {
        increment,
        decrement
    };

}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.decrement();

//another example
function createGreeting(name){
    return function greet(message){
        console.log(`${message}, ${name}`);
    }
}

const greetPerson = createGreeting("sajjad");
greetPerson("Welcome");

//bank accont example
function bankAccount(initialBalance){
    let balance = initialBalance;

    function deposit(amount){
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
    }
    function withdraw(amount){
        balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${balance}`);
    }
    return {
        deposit,
        withdraw
    };
}
const account = bankAccount(1000);
account.deposit(500);
account.withdraw(200);

//secret number example
function secretNumber(initialValue){

    let number = initialValue;
     function getNumber(){
        return number;
     }

     function setNumber(newNumber){
        number = newNumber;
     }
        return {
            getNumber,
            setNumber
        }
} 

const secret = secretNumber(42);
console.log(secret.getNumber());
secret.setNumber(100);
console.log(secret.getNumber());

//multiplier example
function multiplier(x){
    return function(y){
        return x * y;
    }
}

const multiplyBy2 = multiplier(2);
console.log(multiplyBy2(5));