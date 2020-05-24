const Age = parseInt(prompt("Введите Ваш возраст:"));
const leftNeighbours = parseInt(prompt("Введите возраст соседа слева:"));

if (leftNeighbours >= 12) {
    const sum = Age + leftNeighbours;
    console.log(`Сумма Вашего возраста и возраста соседа слева: ${sum}`)
} else if (leftNeighbours < 12){
    console.log("Вашему соседу слева меньше 12 лет")
}
