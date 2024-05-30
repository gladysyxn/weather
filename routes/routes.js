import express from 'express';
import * as ctrl from '../controllers/mainController.js';

const router = express.Router();

router.get('/api/weather/daily/random', ctrl.getRandomCityWeatherCached);
router.get('/api/weather/daily/:city', ctrl.getCityWeatherCached);
router.get('/api/weather/:city', ctrl.getCityWeather);

export default router;