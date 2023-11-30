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

function chooseCar(event){
  const info = document.querySelector('.info');
  switch(event.target.textContent){
    case 'Toyota':
      info.innerHTML = '<h2>Інформація</h2><h3>Toyota Celica</h3><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Toyota_Celica_front_20080521.jpg/1200px-Toyota_Celica_front_20080521.jpg"><button>Купити</button>;'
    break;
    case 'Nissan':
      info.innerHTML = '<h2>Інформація</h2><h3>Nissan GTR</h3><img src="https://storage.googleapis.com/bossauto-images-dev/images/image_1631696354761.jpg"><button>Купити</button>;'
    break;
    case 'Honda':
      info.innerHTML = '<h2>Інформація</h2><h3>Honda NSX</h3><img src="https://media.sketchfab.com/models/32bdaafc04904e49a7ec7697c31179e2/thumbnails/2ceb4fafa00d4e2ca1169176f59a0072/5be2f1ffa1d3452ba48f5405b7e8c23c.jpeg"><button>Купити</button>;'
    break;
    case 'Acura':
      info.innerHTML = '<h2>Інформація</h2><h3>Acura NSX</h3><img src="https://www.driving.co.uk/wp-content/uploads/sites/5/2017/02/nsx-09.jpg"><button>Купити</button>;'
    break;
    case 'Lexus':
      info.innerHTML = '<h2>Інформація</h2><h3>Lexus LFA</h3><img src="https://www.classicdriver.com/sites/default/files/users/33362/cars_images/feed_949379/86ed1a3773b55be81a93a928f40f8a5e.jpeg"><button>Купити</button>;'
    break;
  }
  buttonOn()
}

function choosePhone(event){
  const info = document.querySelector('.info');
  switch(event.target.textContent){
    case 'Banana':
      info.innerHTML = '<h2>Інформація</h2><h3>Banana phone</h3><img src="https://helios-i.mashable.com/imagery/articles/023xVKLZZCYT1Cr04gAvykR/images-2.fill.size_2000x1346.v1611688285.png"><button>Купити</button>;'
    break;
    case 'Apple':
      info.innerHTML = '<h2>Інформація</h2><h3>Iphone</h3><img src="https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1"><button>Купити</button>;'
    break;
    case 'Disk':
      info.innerHTML = '<h2>Інформація</h2><h3>Disk phone</h3><img src="https://assets-global.website-files.com/600af2a75eac7614a9682354/650b288ad30e76d646e8779e_b89d474a-feb8-40ab-b303-92e370c5f9c7.png"><button>Купити</button>;'
    break;
  }
  buttonOn()
}

function chooseLaptop(event){
  const info = document.querySelector('.info');
  switch(event.target.textContent){
    case 'Potato':
      info.innerHTML = '<h2>Інформація</h2><h3>Potato computer</h3><img src="https://img.freepik.com/premium-photo/funny-slow-old-obsolete-desktop-pc-case-that-look-like-potato-computer-that-needs-upgrade_1016244-792.jpg"><button>Купити</button>;'
    break;
    case 'Paper':
      info.innerHTML = '<h2>Інформація</h2><h3>Paper laptop</h3><img src="https://forum.kingdomcomerpg.com/uploads/default/original/3X/4/f/4fc30584b242242367152e7e290b3591092a7e3b.jpg"><button>Купити</button>;'
    break;
    case 'Gaming PC':
      info.innerHTML = '<h2>Інформація</h2><h3>Gaming PC</h3><img src="https://static.planetminecraft.com/files/image/minecraft/data-pack/2023/143/16578213-aa-ab-e-bca_xl.webp"><button>Купити</button>;'
    break;
  }
  buttonOn()
}

function chooseHouse(event){
  const info = document.querySelector('.info');
  switch(event.target.textContent){
    case 'Upside down':
      info.innerHTML = '<h2>Інформація</h2><h3>Upside down House</h3><img src="https://pacific-homes.com/wp-content/uploads/2015/06/Upside-Down-House1.jpg"><button>Купити</button>;'
    break;
    case 'Plane':
      info.innerHTML = '<h2>Інформація</h2><h3>Plane House</h3><img src="https://cdn.homedit.com/wp-content/uploads/2018/01/1965-Boeing-727-Converted-into-a-Costa-Rican-Hotel.jpg"><button>Купити</button>;'
    break;
    case 'Dog':
      info.innerHTML = '<h2>Інформація</h2><h3>Dog House</h3><img src="https://in2english.net/wp-content/uploads/2022/11/unusual-houses-4.jpg"><button>Купити</button>;'
    break;
    case 'Car':
      info.innerHTML = '<h2>Інформація</h2><h3>Car House</h3><img src="https://miro.medium.com/v2/resize:fit:1200/1*YT8_NKafLJBion6i-5peCQ.jpeg"><button>Купити</button>;'
    break;
    case 'Hobbit':
      info.innerHTML = '<h2>Інформація</h2><h3>Hobbit House</h3><img src="https://empire-s3-production.bobvila.com/slides/22828/original/hobbit_house.jpg?1591225968"><button>Купити</button>;'
    break;
  }
  buttonOn()
}

function chooseHuman(event){
  const info = document.querySelector('.info');
  switch(event.target.textContent){
    case 'Cheap':
      info.innerHTML = '<h2>Інформація</h2><h3>Black Man</h3><img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/10/Subtle-Variations-in-Color-turtleneck-eyeglasses.jpg"><button>Купити</button>;'
    break;
    case 'Default':
      info.innerHTML = '<h2>Інформація</h2><h3>White man</h3><img src="https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg"><button>Купити</button>;'
    break;
    case 'Expensive':
      info.innerHTML = '<h2>Інформація</h2><h3>Woman</h3><img src="https://media.istockphoto.com/id/1280410981/photo/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-and-emotions.jpg?s=612x612&w=0&k=20&c=S5w3dRnbzeN7vo43UaXTmouqVnyXajdTiX4JOW8hNxI="><button>Купити</button>;'
    break;
    case 'Small':
      info.innerHTML = '<h2>Інформація</h2><h3>Human Child</h3><img src="https://www.careforkids.com.au/image/blog/articleimage/142a87a5-4e91-450d-ad64-875a7657e8c0?width=1300"><button>Купити</button>;'
    break;
    case 'Giga':
      info.innerHTML = '<h2>Інформація</h2><h3>GIGACHAD</h3><img src="https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg"><button>Купити</button>;'
    break;
  }
  buttonOn()
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
