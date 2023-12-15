// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені 
// замовлення навіть після оновлення сторінки (використовувати localStorage).
// На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень 
// користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// Реалізувати можливість видалення замовлення зі списку.

const category = document.querySelector('ul')
category.addEventListener('click', chooseGoods)
const heading = document.querySelector('h1')
heading.addEventListener('click', reload)
function reload(){
  location.reload()
}
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
      createInfo(goodsInfo.Toyota)
    break;
    case 'Nissan':
      createInfo(goodsInfo.Nissan)
    break;
    case 'Honda':
      createInfo(goodsInfo.Honda)
    break;
    case 'Acura':
      createInfo(goodsInfo.Acura)
    break;
    case 'Lexus':
      createInfo(goodsInfo.Lexus)
    break;
  }
}

function choosePhone(event){
  switch(event.target.textContent){
    case 'Banana':
      createInfo(goodsInfo.Banana)
    break;
    case 'Apple':
      createInfo(goodsInfo.Apple)
    break;
    case 'Disk':
      createInfo(goodsInfo.Disk)
    break;
  }
}

function chooseLaptop(event){
  switch(event.target.textContent){
    case 'Potato':
      createInfo(goodsInfo.Potato)
    break;
    case 'Paper':
      createInfo(goodsInfo.Paper)
    break;
    case 'Gaming PC':
      createInfo(goodsInfo.GamingPC)
    break;
  }
}

function chooseHouse(event){
  switch(event.target.textContent){
    case 'Upside down':
      createInfo(goodsInfo.UpsideDown)
    break;
    case 'Plane':
      createInfo(goodsInfo.Plane)
    break;
    case 'Dog':
      createInfo(goodsInfo.Dog)
    break;
    case 'Car':
      createInfo(goodsInfo.Car)
    break;
    case 'Hobbit':
      createInfo(goodsInfo.Hobbit)
    break;
  }
}

function chooseHuman(event){
  switch(event.target.textContent){
    case 'Cheap':
      createInfo(goodsInfo.Cheap)
    break;
    case 'Default':
      createInfo(goodsInfo.Default)
    break;
    case 'Expensive':
      createInfo(goodsInfo.Expensive)
    break;
    case 'Small':
      createInfo(goodsInfo.Small)
    break;
    case 'Giga':
      createInfo(goodsInfo.Giga)
    break;
  }
}

//Функція "конструктор" для наповнення класа .info яка бере з параметра що передається name і picture
//Після чого засовує їх разом з наперед написаним html кодом всередину класа 

function createInfo(item){
  const info = document.querySelector('.info');
  info.innerHTML =`<h2>Інформація</h2><h3 id='name'>${item.name}</h3><img src=${item.picture}><h4 id='price'>${item.price}$</h4><button class='button'>Купити</button>;`;
  buttonOn(item)
}

function buttonOn(item) {
  const button = document.querySelector('.button')
  button.addEventListener('click', purchase)
  function purchase(){
    const name = document.querySelector('h3')
    alert(`Вітаємо, ви тільки що придбали ${name.textContent}`)
    const date = new Date()
    const data = JSON.stringify([item,date.toUTCString()])
    localStorage.setItem(name.textContent, data)
    location.reload()
  }
}


//Створюю Гігаоб'єкт з трьома рівнями вкладеності, в якому містяться окремі назви товарів і посилання на картинку, все відсортовано, 
//щоб цим можна було зручно користуватись

const goodsInfo = {

    Toyota:{
      name: 'Toyota Celica',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Toyota_Celica_front_20080521.jpg/1200px-Toyota_Celica_front_20080521.jpg',
      price: 5000,
      ownKey: 'Toyota'
    },
    Nissan:{
      name: 'Nissan GTR',
      picture: 'https://storage.googleapis.com/bossauto-images-dev/images/image_1631696354761.jpg',
      price : 50000
    },
    Honda:{
      name: 'Honda NSX',
      picture: 'https://media.sketchfab.com/models/32bdaafc04904e49a7ec7697c31179e2/thumbnails/2ceb4fafa00d4e2ca1169176f59a0072/5be2f1ffa1d3452ba48f5405b7e8c23c.jpeg',
      price : 100000
    },
    Acura:{
      name: 'Acura NSX',
      picture: 'https://www.driving.co.uk/wp-content/uploads/sites/5/2017/02/nsx-09.jpg',
      price : 65000
    },
    Lexus:{
      name: 'Lexus LFA',
      picture: 'https://www.classicdriver.com/sites/default/files/users/33362/cars_images/feed_949379/86ed1a3773b55be81a93a928f40f8a5e.jpeg',
      price : 1000000
    },
    Banana:{
      name: 'Banana phone',
      picture: 'https://helios-i.mashable.com/imagery/articles/023xVKLZZCYT1Cr04gAvykR/images-2.fill.size_2000x1346.v1611688285.png',
      price : 1000
    },
    Apple:{
      name: 'Iphone',
      picture: 'https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1',
      price : 500
    },
    Disk:{
      name: 'Disk phone',
      picture: 'https://assets-global.website-files.com/600af2a75eac7614a9682354/650b288ad30e76d646e8779e_b89d474a-feb8-40ab-b303-92e370c5f9c7.png',
      price : 1000
    },
    Potato:{
      name: 'Potato computer',
      picture: 'https://img.freepik.com/premium-photo/funny-slow-old-obsolete-desktop-pc-case-that-look-like-potato-computer-that-needs-upgrade_1016244-792.jpg',
      price : 50
    },
    Paper:{
      name: 'Paper laptop',
      picture: 'https://forum.kingdomcomerpg.com/uploads/default/original/3X/4/f/4fc30584b242242367152e7e290b3591092a7e3b.jpg',
      price : 10
    },
    GamingPC:{
      name: 'Gaming PC',
      picture: 'https://static.planetminecraft.com/files/image/minecraft/data-pack/2023/143/16578213-aa-ab-e-bca_xl.webp',
      price : 1000
    },
    UpsideDown:{
      name: 'Upside down House',
      picture: 'https://pacific-homes.com/wp-content/uploads/2015/06/Upside-Down-House1.jpg',
      price : 10000
    },
    Plane:{
      name: 'Plane House',
      picture: 'https://cdn.homedit.com/wp-content/uploads/2018/01/1965-Boeing-727-Converted-into-a-Costa-Rican-Hotel.jpg',
      price : 20000
    },
    Dog:{
      name: 'Dog House',
      picture: 'https://in2english.net/wp-content/uploads/2022/11/unusual-houses-4.jpg',
      price : 60000
    },
    Car:{
      name: 'Car House',
      picture: 'https://miro.medium.com/v2/resize:fit:1200/1*YT8_NKafLJBion6i-5peCQ.jpeg',
      price : 100000
    },
    Hobbit:{
      name: 'Hobbit House',
      picture: 'https://empire-s3-production.bobvila.com/slides/22828/original/hobbit_house.jpg?1591225968',
      price : 20
    },
    Cheap:{
      name: 'Black Man',
      picture: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/10/Subtle-Variations-in-Color-turtleneck-eyeglasses.jpg',
      price : 5
    },
    Default:{
      name: 'White man',
      picture: 'https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg',
      price : 1000
    },
    Expensive:{
      name: 'Woman',
      picture: 'https://media.istockphoto.com/id/1280410981/photo/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-and-emotions.jpg?s=612x612&w=0&k=20&c=S5w3dRnbzeN7vo43UaXTmouqVnyXajdTiX4JOW8hNxI=',
      price : 10000
    },
    Small:{
      name: 'Human Child',
      picture: 'https://www.careforkids.com.au/image/blog/articleimage/142a87a5-4e91-450d-ad64-875a7657e8c0?width=1300',
      price : 4000
    },
    Giga:{
      name: 'GIGACHAD',
      picture: 'https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg',
      price : 1000000
    }
}



//Поїхали

const basket = document.querySelector('p')
basket.addEventListener('click', showBuyList)

function showBuyList(){
  const buyList = document.querySelector('.category')
  buyList.innerHTML = '';
  ShowGoods.goods.innerHTML='<ul id = "boughtItems"></ul>';
  const info = document.querySelector('.info');
  info.innerHTML = '';
  const boughtItems = document.querySelector('#boughtItems')
  for ( let i = 0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key))
    const li = document.createElement('li')
    li.className = 'boughtItems'
    li.id = key
    li.textContent = (`${key}, ${value[0].price}$, ${value[1]}`)
    const button = document.createElement('button')
    button.innerText = 'видалити'
    li.appendChild(button)
    boughtItems.appendChild(li)
  }
  boughtItems.addEventListener('click', whatToDo)
  function whatToDo(event){
    const clickedItem = Array.from(boughtItems.children)    
    switch(event.target.tagName){
      case 'LI':
        console.log(event.target.id)
        console.log(event.target.tagName)
      showItem(event.target.id)
      break;
      case 'BUTTON':
        console.log(event.target.parentElement.id)
        console.log(event.target.tagName)
        deleteItem(event.target.parentElement.id)
      break;
    } 
  }
  function showItem(id){
    console.log(id)
    const item = JSON.parse(localStorage.getItem(id))
    createInfo(item[0])
    const button = document.querySelector('.button')
    button.outerHTML=''
  }
}

function deleteItem(id){
  console.log(id)
  localStorage.removeItem(id)
  showBuyList()
}
