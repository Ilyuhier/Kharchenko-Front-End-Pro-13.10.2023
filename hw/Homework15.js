// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Person{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
}

// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Flat{
  citizens = [];
  citizenAdd(person){
    this.citizens.push(person)
  }
}

// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, 
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House{
  constructor(maxNumberOfFlats){
    this.maxFlats = Number(maxNumberOfFlats);
  }
  flats = [];
  flatAdd(flat){
    if(this.flats.length < this.maxFlats){
      this.flats.push(flat)
    } else {
      alert(`Більше квартир не може бути в цьому будинку`)
    }
  }
}

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;

const person1 = new Person("Illia","Male");
const person2 = new Person("Ruslan",'Male');
const person3 = new Person("Veronika",'Female');
const person4 = new Person("Tatyana",'Female');

// декілька екземплярів класу Квартира;

const flat1 = new Flat;
const flat2 = new Flat;

// додадити екземпляри класу Людина до екземплярів класу Квартира;

flat1.citizenAdd(person1)
flat1.citizenAdd(person2)
flat2.citizenAdd(person3)
flat2.citizenAdd(person4)
console.log(flat1)
console.log(flat2)

// екземпляр класу Будинок;

const house1 = new House(16)

// додадити екземпляри класу Квартира до екземплярів класу Будинок.

house1.flatAdd(flat1)
house1.flatAdd(flat2)

console.log(house1)