// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
//  І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, 
// в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, 
// щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student{
  constructor(name,surname, birthYear, grades){
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = [];
    this.attendance.length = 25;
    this.attendanceDayCount = 0;
  }
  
  getBirthYear(){
    console.log(`Студент народився в ${this.birthYear} році`)
  }
  
  getAverageGrades(){
    this.countAverageGrades();
    console.log(`Середній бал студента ${this.name} ${this.surname} = ${this.averageGrade}`)
  }
  
  countAverageGrades(){
    this.averageGrade = this.grades.reduce((accumulator, grade) => accumulator + grade, 0)/this.grades.length
  }

  getAverageAttendance(){
    let AttendedDays = 0;
    this.attendance.forEach(element => {
      if (element === true) {
        AttendedDays++
      }
    })
    this.averageAttendance = AttendedDays / this.attendance.length;
  }

  present(){
    if (this.attendanceDayCount < this.attendance.length) {
      this.attendance.splice(this.attendanceDayCount, 1 , true);
      this.attendanceDayCount ++;
      this.getAverageAttendance();
    } else {
      console.log(`Журнал відвідувань вже заповнений`)
    }
  }
  
  absent(){
    if (this.attendanceDayCount < this.attendance.length) {
      this.attendance.splice(this.attendanceDayCount, 1 , false);
      this.attendanceDayCount ++;
      this.getAverageAttendance();
    } else {
      console.log(`Журнал відвідувань вже заповнений`)
    }
  }
  
  summary(){
    this.countAverageGrades();
    if(this.averageGrade > 90 && this.averageAttendance > 0.9){
      console.log(`Молодець!`)
    } else if (this.averageGrade > 90 || this.averageAttendance > 0.9){
      console.log(`Добре, але можна краще`)
    } else {
      console.log(`Редиска!`)
    }
  }
}


const grades1 = [100, 95, 99, 98, 97];
const student1 = new Student("Ілля", "Харченко", "2003", grades1);

const grades2 = [99, 95, 88, 96,  98];
const student2 = new Student("Марія","Нестерко", "2003", grades2);

const grades3 = [99, 89, 56, 45, 47, 21];
const student3 = new Student("Петро", "Щур", "1989", grades3);


for (let i=0; i < 24; i++){
  student1.present();  
}
student1.absent();
student1.absent();
student1.summary();

student2.getBirthYear();
student2.getAverageGrades();
student2.summary();

student3.summary();
student3.getAverageGrades();