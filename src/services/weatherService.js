const API_KEY = "6e5248109ace76499faa64c7a128a11b"

const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=6e5248109ace76499faa64c7a128a11b&units=metric

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
        .then((res) => res.json())
        .then(data => data)
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat,lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat,lon, temp, feels_like, temp_min, temp_max,humidity, name, dt, country, sunrise, sunset, weather, speed}
}

// const getFormattedWeatherData = (searchParams) => {
//     const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
// }

export default getWeatherData