import express from 'express';
const app = express();
const router = express.Router();


app.get('/api', (req, res) => {
    res.send('Ji');
})

app.listen(3000, () => console.log('Running on 3000'));