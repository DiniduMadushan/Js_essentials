//Global scope

var globalVar="I'm a global variable";
let globalLet="i'm also global,but scoped with let";
const globalConst="i'm a global constant";

{
    var blockvar="im a block-scoped var";
    let blockLet="im a block scoped let";
    const blockConst="im a block-scoped const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// console.log(blockvar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError