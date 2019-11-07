import express from 'express';
import JobController from '../jobs/jobsController.js'
import WserviceController from './wservicesController.js'
import DBService from '../../libraries/utilities/dbService.js';
import status from '../../../config/ctsStatusCodes'
const router = express.Router();
const db = new DBService('localhost', 28015, 'ctsdb');

router.get('/getWservices', async (req, res) => {
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
    const wc = new WserviceController(conn);
    result = await wc.getWservicesByJobId(jId);

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.post('/add', async (req, res) => {
  const  { jId, type } = req.query;

  if(!jId){
    return res.send(status.JOB_NOT_EXISTS);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result = status.VEHICLE_NOT_EXISTS;
  try{
    const jc = new JobController(conn);
    const wc = new WserviceController(conn);
    //check if vehicle id exists
    const isExists = await jc.getJobById(jId);
    if(isExists){
      result = await wc.addWservice(jId, type);
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
  const { wsId } = req.query;
  if(!wsId){
    return res.send(status.WS_ID_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const wc = new WserviceController(conn);
    result = await wc.removeWservice(wsId);
    
    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

export default router;