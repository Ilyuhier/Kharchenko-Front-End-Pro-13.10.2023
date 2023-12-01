// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений 
// і повернення у вихідний стан програми ( коли відображається лише список категорій).

const category = document.querySelector('ul')
category.addEventListener('click', chooseGoods)

function chooseGoods(event){
  const choosenCatigory = Array.from(category.children)
  switch (event.target.textContent){
    case  choosenCatigory[0].textContent:
      ShowGoods.showCars();
    break; 
    case  choosenCatigory[1].textContent:
      ShowGoods.showPhones()
    break; 
    case  choosenCatigory[2].textContent:
      ShowGoods.showlaptops()
    break; 
    case  choosenCatigory[3].textContent:
      ShowGoods.showHouses()
    break; 
    case  choosenCatigory[4].textContent:
      ShowGoods.showPeople()
    break; 
}
}

class ShowGoods{
  static goods = document.querySelector('.goods')  
  static showCars(){
    this.goods.innerHTML ='<h2>Товари</h2><ul><li>Toyota</li><li>Nissan</li><li>Honda</li><li>Acura</li><li>Lexus</li></ul>'
    this.goods.addEventListener('click', chooseCar)
  }
  static showPhones(){
    this.goods.innerHTML ='<h2>Товари</h2><ul><li>Banana</li><li>Apple</li><li>Disk</li></ul>'
    this.goods.addEventListener('click', choosePhone)
  }
  static showlaptops(){
    this.goods.innerHTML ='<h2>Товари</h2><ul><li>Potato</li><li>Paper</li><li>Gaming PC</li></ul>'
    this.goods.addEventListener('click', chooseLaptop)
  }
  static showHouses(){
    this.goods.innerHTML ='<h2>Товари</h2><ul><li>Upside down</li><li>Plane</li><li>Dog</li><li>Car</li><li>Hobbit</li></ul>'
    this.goods.addEventListener('click', chooseHouse)
  }
  static showPeople(){
    this.goods.innerHTML ='<h2>Товари</h2><ul><li>Cheap</li><li>Default</li><li>Expensive</li><li>Small</li><li>Giga</li></ul>'
    this.goods.addEventListener('click', chooseHuman)
  }
}

//Коли .goods ловить клік на якийсь товар, то замість того щоб просто піняти innerHTML класу .info викликає функцію
//createInfo(), описану на 259 строці і передає в неї параметром дані з гігаоб'єкта, описаним на 159 строці

function chooseCar(event){
  switch(event.target.textContent){
    case 'Toyota':
      createInfo(goodsInfo.cars.Toyota)
    break;
    case 'Nissan':
      createInfo(goodsInfo.cars.Nissan)
    break;
    case 'Honda':
      createInfo(goodsInfo.cars.Honda)
    break;
    case 'Acura':
      createInfo(goodsInfo.cars.Acura)
    break;
    case 'Lexus':
      createInfo(goodsInfo.cars.Lexus)
    break;
  }
}

function choosePhone(event){
  switch(event.target.textContent){
    case 'Banana':
      createInfo(goodsInfo.phones.Banana)
    break;
    case 'Apple':
      createInfo(goodsInfo.phones.Apple)
    break;
    case 'Disk':
      createInfo(goodsInfo.phones.Disk)
    break;
  }
}

function chooseLaptop(event){
  switch(event.target.textContent){
    case 'Potato':
      createInfo(goodsInfo.laptops.Potato)
    break;
    case 'Paper':
      createInfo(goodsInfo.laptops.Paper)
    break;
    case 'Gaming PC':
      createInfo(goodsInfo.laptops.GamingPC)
    break;
  }
}

function chooseHouse(event){
  switch(event.target.textContent){
    case 'Upside down':
      createInfo(goodsInfo.houses.UpsideDown)
    break;
    case 'Plane':
      createInfo(goodsInfo.houses.Plane)
    break;
    case 'Dog':
      createInfo(goodsInfo.houses.Dog)
    break;
    case 'Car':
      createInfo(goodsInfo.houses.Car)
    break;
    case 'Hobbit':
      createInfo(goodsInfo.houses.Hobbit)
    break;
  }
}

function chooseHuman(event){
  switch(event.target.textContent){
    case 'Cheap':
      createInfo(goodsInfo.humans.Cheap)
    break;
    case 'Default':
      createInfo(goodsInfo.humans.Default)
    break;
    case 'Expensive':
      createInfo(goodsInfo.humans.Expensive)
    break;
    case 'Small':
      createInfo(goodsInfo.humans.Small)
    break;
    case 'Giga':
      createInfo(goodsInfo.humans.Giga)
    break;
  }
}
function buttonOn() {
  const button = document.querySelector('button')
  button.addEventListener('click', purchase)
  function purchase(){
  const name = document.querySelector('h3')
  alert(`Вітаємо, ви тільки що придбали ${name.textContent}`)
  location.reload()
  }
}


//Створюю Гігаоб'єкт з трьома рівнями вкладеності, в якому містяться окремі назви товарів і посилання на картинку, все відсортовано, 
//щоб цим можна було зручно користуватись

const goodsInfo = {
  cars:{
    Toyota:{
      name: 'Toyota Celica',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Toyota_Celica_front_20080521.jpg/1200px-Toyota_Celica_front_20080521.jpg'
    },
    Nissan:{
      name: 'Nissan GTR',
      picture: 'https://storage.googleapis.com/bossauto-images-dev/images/image_1631696354761.jpg'
    },
    Honda:{
      name: 'Honda NSX',
      picture: 'https://media.sketchfab.com/models/32bdaafc04904e49a7ec7697c31179e2/thumbnails/2ceb4fafa00d4e2ca1169176f59a0072/5be2f1ffa1d3452ba48f5405b7e8c23c.jpeg'
    },
    Acura:{
      name: 'Acura NSX',
      picture: 'https://www.driving.co.uk/wp-content/uploads/sites/5/2017/02/nsx-09.jpg'
    },
    Lexus:{
      name: 'Lexus LFA',
      picture: 'https://www.classicdriver.com/sites/default/files/users/33362/cars_images/feed_949379/86ed1a3773b55be81a93a928f40f8a5e.jpeg'
    }
  },
  phones:{
    Banana:{
      name: 'Banana phone',
      picture: 'https://helios-i.mashable.com/imagery/articles/023xVKLZZCYT1Cr04gAvykR/images-2.fill.size_2000x1346.v1611688285.png'
    },
    Apple:{
      name: 'Iphone',
      picture: 'https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1'
    },
    Disk:{
      name: 'Disk phone',
      picture: 'https://assets-global.website-files.com/600af2a75eac7614a9682354/650b288ad30e76d646e8779e_b89d474a-feb8-40ab-b303-92e370c5f9c7.png'
    }
  },
  laptops:{
    Potato:{
      name: 'Potato computer',
      picture: 'https://img.freepik.com/premium-photo/funny-slow-old-obsolete-desktop-pc-case-that-look-like-potato-computer-that-needs-upgrade_1016244-792.jpg'
    },
    Paper:{
      name: 'Paper laptop',
      picture: 'https://forum.kingdomcomerpg.com/uploads/default/original/3X/4/f/4fc30584b242242367152e7e290b3591092a7e3b.jpg'
    },
    GamingPC:{
      name: 'Gaming PC',
      picture: 'https://static.planetminecraft.com/files/image/minecraft/data-pack/2023/143/16578213-aa-ab-e-bca_xl.webp'
    }
  },
  houses:{
    UpsideDown:{
      name: 'Upside down House',
      picture: 'https://pacific-homes.com/wp-content/uploads/2015/06/Upside-Down-House1.jpg'
    },
    Plane:{
      name: 'Plane House',
      picture: 'https://cdn.homedit.com/wp-content/uploads/2018/01/1965-Boeing-727-Converted-into-a-Costa-Rican-Hotel.jpg'
    },
    Dog:{
      name: 'Dog House',
      picture: 'https://in2english.net/wp-content/uploads/2022/11/unusual-houses-4.jpg'
    },
    Car:{
      name: 'Car House',
      picture: 'https://miro.medium.com/v2/resize:fit:1200/1*YT8_NKafLJBion6i-5peCQ.jpeg'
    },
    Hobbit:{
      name: 'Hobbit House',
      picture: 'https://empire-s3-production.bobvila.com/slides/22828/original/hobbit_house.jpg?1591225968'
    }
  },
  humans:{
    Cheap:{
      name: 'Black Man',
      picture: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/10/Subtle-Variations-in-Color-turtleneck-eyeglasses.jpg'
    },
    Default:{
      name: 'White man',
      picture: 'https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg'
    },
    Expensive:{
      name: 'Woman',
      picture: 'https://media.istockphoto.com/id/1280410981/photo/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-and-emotions.jpg?s=612x612&w=0&k=20&c=S5w3dRnbzeN7vo43UaXTmouqVnyXajdTiX4JOW8hNxI='
    },
    Small:{
      name: 'Human Child',
      picture: 'https://www.careforkids.com.au/image/blog/articleimage/142a87a5-4e91-450d-ad64-875a7657e8c0?width=1300'
    },
    Giga:{
      name: 'GIGACHAD',
      picture: 'https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg'
    }
  }
}

//Функція "конструктор" для наповнення класа .info яка бере з параметра що передається name і picture
//Після чого засовує їх разом з наперед написаним html кодом всередину класа 

function createInfo(item){
  const info = document.querySelector('.info');
  info.innerHTML =`<h2>Інформація</h2><h3>${item.name}</h3><img src=${item.picture}><button>Купити</button>;`;
  buttonOn()
}