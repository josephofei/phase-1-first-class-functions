const greet = function () { return `hello world` }

function receivesAFunction(callback) {
    console.log("Callback on line 4: ", callback())
    return callback();
}

const data = receivesAFunction(greet)
console.log("Final result: ", data);



function returnsANamedFunction() {
    return function name() {
        return ``
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return ``
    }
}



receivesAFunction(function () { return `Spy` });