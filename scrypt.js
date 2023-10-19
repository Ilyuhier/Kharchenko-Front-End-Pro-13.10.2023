const user={};
user.BirthYear = prompt('В якому році ви народились?');
if (user.BirthYear == undefined || user.BirthYear == '') {
  alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
}
user.City = prompt('В якому місті ви живете?');
if(user.City == undefined || user.City == ''){
  alert(`Шкода, що Ви не захотіли ввести своє місто`);
}
user.FavSport = prompt('Який ваш улюблений вид спорту?');
if(user.FavSport == undefined || user.FavSport == ''){
  alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
}
let CityMessage ='';
let sportMessage ='';
const currentYear = 2023;
user.Age = currentYear-user.BirthYear;

switch (user.City) {
  case 'Київ':
  case 'Kyiv':
    CityMessage = (`Ти живеш у столиці України`);
    break;
  case 'Вашингтон':
  case 'Vashington':
    CityMessage = (`Ти живеш у столиці США`);
    break;
  case 'Лондон':
  case 'London':
    CityMessage = (`Ти живеш у столиці Англії`);
    break;
  default:
    CityMessage = (`Ти живеш у місті ${user.City}`);
    break;
}

switch (user.FavSport) {
  case 'Футбол':
    sportMessage =(`Круто! Хочеш стати Кріштіану Роналду?`);
    break;
  case 'Пауерліфтінг':
    sportMessage =(`Круто! Хочеш стати Хафтором Бйорсоном?`);
    break;
  case 'Баскетбол':
    sportMessage =(`Круто! Хочеш стати Майклом Джорданом?`);
    break;
  default :
    sportMessage ='';
    break;
}

alert (
  `Тобі ${user.Age} років 
${CityMessage}
${sportMessage}`
);