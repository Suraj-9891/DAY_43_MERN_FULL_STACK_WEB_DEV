console.log("Let's Start");

// Object create

// let reactangle = {
//     length: 1,
//     breath: 2,

//     draw: function(){
//        console.log("drawing rectangle"); 
//     }
// };



// factory function

function createReactangle(len, bre){
    return reactangle = {
        length: len,
        breath: bre,
    
        draw: function(){
           console.log("drawing rectangle"); 
        }
    };
}

// Object Creation using factory function.

let reactangleObj1 = createReactangle(5,8);
let reactangleObj2 = createReactangle(5,9);
let reactangleObj3 = createReactangle(5,5);


/*
# Camelcase -->> numberOfStudent
# constructor function ->> Pascal Notation -> first letter of every word is capital -> NumberOfStudent
# constructor function ->> pro/method ->> intialise/Define
*/

// 
function Reactangle(len, bre){
    this.length = len;
    this.breath = bre;
    this.draw = function(){
        console.log("drawing");
    }
};

// object creation using constructor function.?
let reactangleObject = new Reactangle(4,3);

// Add the data menber using Object.

reactangleObject.color = "yellow";
console.log(reactangleObject);


// delete the properties using object

delete reactangleObject.color;
console.log(reactangleObject);


// let Reactangle1 = new Function(
//     'length', 'breadth',
//     'this.length = length;
//     this.breath = breadth;
//     this.draw = function(){
//         console.log("drawing");
//     }');


let reactangle1 = {
    length: 1,
    breath: 2,

    draw: function(){
       console.log("drawing"); 
    }
};
let reactangle2 = {
    length: 1,
    breath: 2,

    draw: function(){
       console.log("drawing"); 
    }
};


// Referance by Value.
let a={value: 10};
let b=a;

a.value++;
console.log(a.value);
console.log(b.value);

// function call pass by value

let x =10;
function inc (x){
    x++;
    console.log(x);
}
inc(x);
console.log(x);

// Pass by refernce
let y = {value: 15};
function inc(y){
    a.value++;
}
inc(y);
console.log(y);


let reactangle ={
    length:2,
    breath:4
};

// for-in loop

for(let key in reactangle){
    // key are reflectd through key variable.
    // values are reflected through reactangle (key)
    console.log(key,reactangle(key));
}

// for-of loop

for(let key of reactangle){
    console.log(key);
}

// check properties is not.?

if('color' in reactangle){
    console.log('Parsent')
}

else {
    console.log('Abset');
}


// Object Clone

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}
console.log(dest);

src.a++;
console.log(dest);

// Object Cloning #2

let src1 = {
    a:10,
    b:20,
    c:30
}

let dset1 = Object.assign({},src1);
console.log(dest1);
src1.a++;
console.log(dest);
