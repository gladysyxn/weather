import mongoose from 'mongoose';
const { Schema } = mongoose;


const WeatherRangeSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    unique: true,
  },
  temperatureRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,      
    }
  },
  possibleWeather: {
    type: [String],
    required: true,
  },
  humidityRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,      
    }
  },
  windSpeedRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,      
    }
  },
});


// Check if the model exists before compiling it
const WeatherRange = mongoose.models.WeatherRange || mongoose.model('WeatherRange', WeatherRangeSchema);

export default WeatherRange;


