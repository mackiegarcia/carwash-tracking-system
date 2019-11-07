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
  }
}

export default statusCode;