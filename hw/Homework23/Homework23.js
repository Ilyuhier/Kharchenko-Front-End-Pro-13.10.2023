// Реалізовуємо форму для реєстрації.

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.



const pArray = [
  ['input',['className','name','type','text','placeholder','Ім\'я']],
  ['input',['className','surname','type','text','placeholder','Прізвище']],
  ['input',['className','birthDate','type','text','placeholder','Дата народення']],
  ['h4',['textContent','Ваша стать']],
  ['input',['className', 'sex','name','sex','type','radio','value','male',],'Чоловік'],
  ['input',['className', 'sex', 'name','sex','type','radio','value','female'],'Жінка'],
  ['select',['className','city','innerHTML','<option value="Cherkasy">Черкаси</option><option value="Lviv">Львів</option><option value="Kyiv">Київ</option>']],
  ['textarea',['className','adress','placeholder','Адреса']],
  ['h4',['textContent','Мови, якими володієте']],
  ['input',['className', 'languages', 'type','checkbox','value','english'],'Англійська'],
  ['input',['className', 'languages', 'type','checkbox','value','ukrainian'],'Українська'],
  ['input',['className', 'languages', 'type','checkbox','value','polish'],'Польська'],
  ['button',['type','button','innerText','Зберегти']]
]
const body = document.querySelector('body')
const form = document.createElement('form')
const classArray = new Set()
body.appendChild(form)
pArray.forEach((e)=>  
  pushP(e)
)

function pushP(pElement){
    const p = document.createElement('p')
    form.appendChild(p)
    if(pElement.length === 3){
      extraText(p,pElement[2])
    }
    const innerP = document.createElement(pElement[0])
    p.appendChild(innerP)
    FillingP(innerP, pElement[1])
    
}

function FillingP(p, e){
  const myProperties = {};
  for (let i = 0; i<e.length; i=i+2){
    myProperties[e[i]] = p[e[i]]
    myProperties[e[i]] = e[i+1]
    p[e[i]]=myProperties[e[i]]
  }
  if(p.className !== ''){
    classArray.add(p.className)
  }
  
}

function extraText(e,text){
  e.innerText = text
}

const button = document.querySelector('button')

button.addEventListener('click',showTable)
function showTable(event){
  showTable()
}

function showTable(){
  const table = document.createElement('table')
  body.appendChild(table)
  classArray.forEach((element)=>
  buildTable(element,table)
  )
}

function buildTable(element,table){
  console.log(element)
  const tr = document.createElement('tr')
  table.appendChild(tr)
  const naming = document.createElement('td')
  tr.appendChild(naming)
  const property = document.getElementsByClassName(element)
  console.log(property)
  naming.innerText = `${property[0].className}:`
  const value = document.createElement('td')
  tr.appendChild(value)
  
  for (const item of property){
    if(item.type === 'radio' || item.type === 'checkbox'){
      if(item.checked === true){
        value.innerText += ` ${item.value}`
      }
    } else
    value.innerText += ` ${item.value}`
  }
}