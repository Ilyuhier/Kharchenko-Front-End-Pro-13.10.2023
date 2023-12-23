// За допомогою ajax-запиту вивести погоду

// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість 
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png  



const button = document.querySelector('button')
button.addEventListener('click',fetchData)

async function fetchData() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
    buildTable(data)
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function buildTable(data){
  const parametrsArray = ['q', 'temp', 'pressure', 'description', 'humidity','speed', 'deg']
  const dataParametrsNames = [ data.name, data.main.temp, data.main.pressure, data.weather[0].description, data.main.humidity, data.wind.speed, data.wind.deg]
  const table = document.createElement('table')
  const body =  document.querySelector('body')
  showIcon(body)
  body.appendChild(table)
  for(let i = 0; i<parametrsArray.length; i++){
    buildLine(parametrsArray[i], dataParametrsNames[i], table)
  }
}

function buildLine(parametr, parametrValue, table){
  const line = document.createElement('tr')
  table.appendChild(line)
  const parametrName = document.createElement('td')
  parametrName.style.textAlign = 'right'
  line.appendChild(parametrName)
  parametrName.textContent = `${parametr}:`
  const value = document.createElement('td')
  line.appendChild(value)
  value.textContent = parametrValue
}

function showIcon(body){
  const p = document.createElement('p')
  body.appendChild(p)
  const iconLink = 'http://openweathermap.org/img/w/10d.png'
  const icon = document.createElement('img')
  p.appendChild(icon)
  icon.src = iconLink
} 