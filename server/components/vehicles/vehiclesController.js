import r from 'rethinkdb';

export default class VehicleController {
  constructor(dbconn){
    this.conn = dbconn;
    this.tableName = 'vehicles';
  }

  async getVehicles() {
    const cursor = await r.table(this.tableName)
      .orderBy(r.desc('plateNumber'))
      .run(this.conn);
    const result = await cursor.toArray();

    return JSON.stringify(result);
  }

  async isPlateExists(plateNumber) {
    //check if platenumber exists
    const exists = await r.table(this.tableName)('plateNumber')
      .count(plateNumber.toUpperCase())
      .run(this.conn);

    return exists;
  }

  async isVehicleExists(id) {
    const exists = await r.table(this.tableName)('id')
      .count(id)
      .run(this.conn);

    return exists;
  }
  
  async getVehicleByPlateNumber(plateNumber) {
    const cursor = await r.table(this.tableName)
      .filter({plateNumber})
      .run(this.conn);
    const [ result ] = await cursor.toArray();

    return JSON.stringify(result);
  }

  async getVehicleById(id) {
    const cursor = await r.table(this.tableName)
      .filter({id})
      .run(this.conn);
    const [ result ] = await cursor.toArray();

    return JSON.stringify(result);
  }

  async addVehicle(plateNumber, type = 0, model = '', createdAt = r.now(), updatedAt = r.now()) {
    plateNumber = plateNumber.toUpperCase();

    const result = await r.table(this.tableName).insert({
      plateNumber,
      type,
      model,
      createdAt,
      updatedAt
    })
    .run(this.conn);

    return JSON.stringify(result);
  }

  async removeVehicle(plateNumber) {
    const result = await r.table(this.tableName)
      .filter({'plateNumber': plateNumber})
      .delete()
      .run(this.conn);

    return JSON.stringify(result);
  }

  async updateVehicle(id, plateNumber, type, model, updatedAt = r.now()) {
    plateNumber = plateNumber.toUpperCase();

    const result = await r.table(this.tableName)
      .filter({id})
      .update({
        'plateNumber': plateNumber,
        'type': type,
        'model': model,
        'updatedAt': updatedAt
      })
      .run(this.conn);

    return JSON.stringify(result);
  }
}