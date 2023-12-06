import express from 'express';
import router from './routes/userRoutes.js'
const app = express();
import mongoose from 'mongoose';

// MiddleWare
import errorHandler from './middleware/errorhandler.js';


// DB Connection
// const dbUrl = process.env.DB_URL;
const locallUrl = 'mongodb://127.0.0.1:27017/little-lemon';
mongoose.connect(locallUrl)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected');
})

// MiddleWare
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);

// Routes
app.use('/user', router);


app.listen(3000, () => console.log('Running on 3000'));