// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

function Person(name,age){
  this.name = name;
  this.age = age;
  this.tellAboutPerson = function(){
    console.log(`ім'я: ${name}, вік: ${age}`)
  }
}

// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
// інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

function Car(label, model, year, numberSign){
  this.label = label;
  this.model = model;
  this.year = year;
  this.numberSign = numberSign;
  this.owner = undefined;
  this.addOwner = function(newOwner){
    if( newOwner instanceof Person){
      if( newOwner.age >= 18){
        return  this.owner = newOwner;
      } else{
        alert(`Власник замалий`)
      }
    } else {
     alert(`Це не є екземпляр потрібного класу`) 
    }
  }
  this.showInfo = function(){
    console.log(`Власник: `)
    this.owner.tellAboutPerson()
    console.log(`Марка: ${label}, Модель: ${model}, Рік випуску:${year}, Номерний знак:${numberSign}`)
  }
}



// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;

const person1 = new Person('Illia',20)
const person2 = new Person('Ruslan',44)
const person3 = new Person('Maksim',22)

// декілька екземплярів класу Автомобіль;

const car1 = new Car("Toyota","Celica","2004","СА8552КА")
const car2 = new Car("Peugeot","307","2004","СВ4206ЕЕ")
const car3 = new Car("Volkswagen","Passat", "2002", "СА0380ІМ")

// присвоїти власників автомобілям.

car1.addOwner(person1)
car2.addOwner(person2)
car3.addOwner(person3)

car1.showInfo()
car2.showInfo()
car3.showInfo()
