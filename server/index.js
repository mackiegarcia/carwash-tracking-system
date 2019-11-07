import express from 'express';
import vehiclesRouter from './components/vehicles/vehiclesRouter.js';
import jobsRouter from './components/jobs/jobsRouter.js';
import wservicesRouter from './components/wservices/wservicesRouter.js';
const app = express();
const port = 5000;

app.use('/vehicles', vehiclesRouter);
app.use('/jobs', jobsRouter);
app.use('/wservices', wservicesRouter);

app.listen(port, () => console.log(`Sever started on port ${port}`));