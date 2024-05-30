import mongoose from 'mongoose';
const { Schema } = mongoose;

const CACHE_EXPIRATION_TIME = 24 * 60 * 60; // 24 hours in seconds

const DailyWeatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    unique: true,
  },
  condition: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  wind: {
    speed: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    }
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    expires: CACHE_EXPIRATION_TIME,
  }, 
});


// Check if the model exists before compiling it
const DailyWeather = mongoose.models.DailyWeather || mongoose.model('DailyWeather', DailyWeatherSchema);

export default DailyWeather;
