const statusCode = {
  PLATE_NOT_PROVIDED: {
    status: 471,
    error: 'Vechicle plate not provided!'
  },
  PLATE_EXISTS: {
    status: 472,
    error: 'Vechicle plate already exists!'
  },
  VEHICLE_NOT_EXISTS: {
    status: 473,
    error: 'Vechicle id doesnt exists!'
  },
  VEHICLE_ID_NOT_PROVIDED: {
    status: 474,
    error: 'Vechicle id not provided!'
  },
  JOB_ID_NOT_PROVIDED: {
    status: 475,
    error: 'Job id not provided!'
  },
  JOB_NOT_EXISTS: {
    status: 476,
    error: 'Job id doesnt exists!'
  },
  WS_ID_NOT_PROVIDED: {
    status: 477,
    error: 'Wash Service id not provided!'
  }
}

export default statusCode;