import express from 'express';
import VehicleController from './vehiclesController.js'
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
    const vc = new VehicleController(conn);
    result = await vc.getVehicles();

    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.get('/get', async (req, res) => {
  const { plate } = req.query;

  if(!plate){
    return res.send(status.PLATE_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const vc = new VehicleController(conn);
    result = await vc.getVehicleByPlateNumber(plate);
    
    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.post('/add', async (req, res) => {
  const  { plate, type, model } = req.query;

  if(!plate){
    return res.send(status.PLATE_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result = status.PLATE_EXISTS;
  try{
    const vc = new VehicleController(conn);
    //check if platenumbe exists
    const isExists = await vc.isPlateExists(plate);

    if(!isExists){
      result = await vc.addVehicle(plate, type, model);
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
  const { plate } = req.query;

  if(!plate){
    return res.send(status.PLATE_NOT_PROVIDED);
  }

  let conn;
  try{
    conn = await db.connectDb();
  }catch(error){
    return res.send({status: 500, error});
  }

  let result;
  try{
    const vc = new VehicleController(conn);
    result = await vc.removeVehicle(plate);
    
    return res.send(result);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

router.put('/update', async (req, res) => {
  const  { id, plate, type, model } = req.query;

  if(!plate){
    return res.send(status.PLATE_NOT_PROVIDED);
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
    //check if vechile id exists
    const oldVehicleRecord = await vc.getVehicleById(id);
    if(oldVehicleRecord){
      if(oldVehicleRecord!==plate){
        //updating the platenumber with a nw one
        result = status.PLATE_EXISTS;
        const isPlateExists = await vc.isPlateExists(plate);
        if(!isPlateExists){
          result = await vc.updateVehicle(id, plate, type, model);
        }
      }
      else{
        result = await vc.updateVehicle(id, plate, type, model);
      }
    }

    return res.send(oldVehicleRecord);
  } catch(error){
    result = {status: 500, error};

    return res.send(result);
  } finally {
    await conn.close();
  }
});

export default router;