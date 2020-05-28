const cafe= {name: Republic, width:200, height: 300, personal:5, hr: true }; 
for(caf in cafe){
    console.log(`key - ${caf}, Value - ${cafe[caf]}`)
}
const area = function(a , b){
    return a * b;
}
console.log(`Площадь кафе равна: ${area(cafe.width, cafe.height)}`)