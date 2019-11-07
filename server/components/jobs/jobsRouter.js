import express from 'express';
import VehicleController from '../vehicles/vehiclesController.js'
import JobController from './jobsController.js'
import DBService from '../../libraries/utilities/dbService.js';
import status from '../../../config/ctsStatusCodes'
const router = express.Router();
const db = new DBService('localhost', 28015, 'ctsdb');

router.get('/all', async (req, res) => {
  let conn;

  try{
    conn = await db.connectDb();

  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const jc = new JobController(conn);
    result = await jc.getJobs();

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.get('/today', async (req, res) => {
  let conn;

  try{
    conn = await db.connectDb();

  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const jc = new JobController(conn);
    result = await jc.getJobsToday();

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.get('/getById', async (req, res) => {
  const { jId } = req.query;
  if(!jId){
    return res.send(status.JOB_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();

  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const jc = new JobController(conn);
    result = await jc.getJobById(jId);

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.get('/getByVehicleId', async (req, res) => {
  const { vId } = req.query;
  if(!vId){
    return res.send(status.VEHICLE_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();

  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const jc = new JobController(conn);
    result = await jc.getJobByVehicleId(vId);

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.post('/add', async (req, res) => {
  const  { vId } = req.query;

  if(!vId){
    return res.send(status.VEHICLE_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result = status.VEHICLE_NOT_EXISTS;
  try{
    const vc = new VehicleController(conn);
    const jc = new JobController(conn);

    //check if vehicle id exists
    const isExists = await vc.isVehicleExists(vId);
    if(isExists){
      result = await jc.addJob(vId);
    }

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.delete('/remove', async (req, res) => {
  const { jId } = req.query;
  if(!jId){
    return res.send(status.JOB_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const jc = new JobController(conn);
    result = await jc.removeJob(jId);
    
    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.put('/update', async (req, res) => {
  const  { jId } = req.query;

  if(!jId){
    return res.send(status.JOB_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result = status.JOB_NOT_EXISTS;
  try{
    const jc = new JobController(conn);
    //check if vechile id exists
    const jobOldRecord = await jc.getJobById(jId);
    if(jobOldRecord){
      result = await jc.updateJob(jId);
    }
 
    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

export default router;