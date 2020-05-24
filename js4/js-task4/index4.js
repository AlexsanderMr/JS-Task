let name = '';
do {
    name = prompt('Введите имя героя:','');
 if (name.length <= 6){
    console.log('Введенное имя героя: ',name);

 }else if (name.length > 6){
     console.log("Error")
 }
}
while(name.length <= 6)


