const Animals = ['pig', 'dog', 'cat', 'parrot', 'chicken'];
const AnimalPets = Animals.splice(1, 3);
AnimalPets.splice(-1, 1);
AnimalPets.splice(2, 0, 'shark', 'elephant');
console.log(AnimalPets);