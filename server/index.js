import express from 'express';
import vehicles from './components/vehicles/vehiclesRouter.js';
const app = express();
const port = 5000;

app.use('/things', vehicles);

app.listen(port, () => console.log(`Sever started on port ${port}`));