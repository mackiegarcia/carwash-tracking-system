import express from 'express';
import vehicles from './components/vehicles/vehiclesRouter.js';
import jobs from './components/jobs/jobsRouter.js';
const app = express();
const port = 5000;

app.use('/vehicles', vehicles);
app.use('/jobs', jobs);

app.listen(port, () => console.log(`Sever started on port ${port}`));