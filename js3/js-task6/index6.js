  
const firstname = prompt("Введите свое имя");
const surname = prompt("Введите свою фамилию");
if (firstname.length > 4 && surname.length > 5) {
    const sum = firstname.length + surname.length;
    console.log(`Длина имени и фамилии вместе: ${sum}`);
} else {
    console.log("Упс Ошибка ");
}