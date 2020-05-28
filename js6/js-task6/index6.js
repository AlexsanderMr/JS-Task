const m = function(a , b) {
    const mul = function (n , l){
return `умножение = ${n * l}`+`сложнние = ${n + l}`+`вычитание = ${n - l}`
    };
n = a;
l = b;
return mul(a , b);
}
console.log(m(10 , 3));