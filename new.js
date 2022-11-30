const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')



const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='


const API_KEY = '&appid=9186e99fdb2aa439d3fbd8cdbf219c24'

const API_UNITS = '&units=metric'



const getWeather = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_UNITS
    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = res.data.weather[0]
      
        console.log(status.id);
        warning.textContent = ''
        input.value = ''



        if(status.id < 300){
            photo.setAttribute('src', './img/thunderstorm.png')
        }
         if(status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', './img/drizzle.png')
        }
        if(status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', './img/rain.png')
        }
        if(status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', './img/ice.png')
        }
        if(status.id >= 700 && status.id < 800) {
            photo.setAttribute('src', './img/fog.png')
        }

        if(status.id > 800 && status.id < 900) {
            photo.setAttribute('src', './img/cloud.png')
        }
        if(status.id === 800) {
            photo.setAttribute('src', './img/sun.png')
        }


        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = hum + '%'
        weather.textContent = status.main
    }).catch(() => warning.textContent = 'Wpisz poprawne miasto!')

}




input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      getWeather();
    }
  });
button.addEventListener('click', getWeather)
getWeather()
