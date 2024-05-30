import express from 'express';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

import dotenv from 'dotenv'; 
dotenv.config({ path: 'process.env' });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define routes
import routes from './routes/routes.js'; 
app.use('/', routes);


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});








