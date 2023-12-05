import express from 'express';
import router from './routes/userRoutes.js'
const app = express();

// MiddleWare
import errorHandler from './middleware/errorhandler.js';

// const router = express.Router();
app.use('/user', router);



app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);

app.listen(3000, () => console.log('Running on 3000'));