const numbers = [10,-356,2,-76,89,15,-45];
let sumplus = 0;
let summinus = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumplus += numbers[i];
    }
    else if (numbers[i] < 0){
        summinus += numbers[i];
    }
}
 console.log(sumplus);
 console.log(summinus);
//Подробнее показывает складывание 
//  const numbers = [10,-356,2,-76,89,15,-45];
// let sumplus = 0;
// let summinus = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         sumplus += numbers[i];
//         console.log(sumplus);
//     }
//     else if (numbers[i] < 0){
//         summinus += numbers[i];
//        console.log(summinus);
//     }
// }
