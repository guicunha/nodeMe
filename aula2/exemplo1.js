console.log(foo);
foo();
function foo() {
    console.log('foo');

}

function Divisivel(base){
    return function por(num){
        return base % num === 0;
    };
}

var cemDivisivel = Divisivel(100);

console.log(cemDivisivel(5));
console.log(cemDivisivel(3));
console.log(cemDivisivel(9));
console.log(cemDivisivel(2));
console.log(cemDivisivel(25));