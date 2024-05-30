import DailyWeather from '../models/DailyWeather.js';
import WeatherRange from '../models/WeatherRange.js';


function getRandomValue(range) {
  return ((Math.random() * (range.max - range.min)) + range.min).toFixed(2);
}

const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

function generateRandomWeather(weatherRange) {

    const temperature = getRandomValue(weatherRange.temperatureRange); 
    const humidity = getRandomValue(weatherRange.humidityRange);
    const conditions = weatherRange.possibleWeather;
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const windSpeed = getRandomValue(weatherRange.windSpeedRange); 
    const windDirection = windDirections[Math.floor(Math.random() * windDirections.length)];
    
    return {
      temperature: `${temperature}`,
      humidity: `${humidity}`,
      condition: condition,
      wind: {
        speed: `${windSpeed}`,
        direction: windDirection
      },
      city: `${weatherRange.city}`
    };

}

// Endpoint to get random weather data for a city
export const getCityWeather = async(req, res) => {

  try {
    const city = req.params.city;
    console.log(city);

    const range = await WeatherRange.findOne({ city: new RegExp(`^${city}$`, 'i') })
    console.log(range);

    const weatherData = generateRandomWeather(range);

    res.json(weatherData);
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error: 'City not found' });
  } 
};

// Endpoint to get cached weather data for a city - using mongodb for cache
export const getCityWeatherCached = async(req, res) => {
  const city = req.params.city;

  try {
    const cachedData = await DailyWeather.findOne({city: new RegExp(`^${city}$`, 'i') });
    console.log(cachedData);

    // Check if there is cached data and if it is expired
    if (cachedData) {
      return res.json(cachedData);
    } else {
      const range = await WeatherRange.findOne({city: new RegExp(`^${city}$`, 'i') });
      console.log(range);
      const weatherData = generateRandomWeather(range);
      const weather = new  DailyWeather(weatherData);
        weather.save();
        return res.json(weather);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error: 'City not found' });   
  }
};


export const getRandomCityWeatherCached = async(req, res) => {
  try { 
    const ranges = await WeatherRange.find({});
    const validCities = ranges.map(range => range.city);

    const index = Math.floor(Math.random() * validCities.length); 

    const city = validCities[index]
    console.log(city);

    const cachedData = await DailyWeather.findOne({city: new RegExp(`^${city}$`, 'i') });

    // Check if there is cached data and if it is expired
    if (cachedData) {
      return res.json(cachedData);
    } else {

      const range = ranges[index];
      console.log(range);
      const weatherData = generateRandomWeather(range);
      console.log(weatherData);

      const weather = new  DailyWeather(weatherData);
       
       weather.save();
       return res.json(weather);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error: 'City not found' });
  } 

};






