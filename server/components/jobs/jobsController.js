import r from 'rethinkdb';

export default class JobController {
  constructor(dbconn){
    this.conn = dbconn;
    this.tableName = 'jobs';
  }

  async getJobs() {
    const cursor = await r.table(this.tableName)
      .orderBy(r.desc('createdAt'))
      .run(this.conn);
    const result = await cursor.toArray();

    return JSON.stringify(result);
  }

  async getJobsToday() {
    const cursor = await r.table(this.tableName)
      .filter((job) => {
        return job('createdAt').date().eq(r.now().date())
      })
      .orderBy(r.desc('createdAt'))
      .run(this.conn);
    const result = await cursor.toArray();

    return JSON.stringify(result);
  }

  async getJobById(id) {
    const cursor = await r.table(this.tableName)
      .filter({id})
      .orderBy(r.desc('createdAt'))
      .run(this.conn);
    const [ result ] = await cursor.toArray();

    return JSON.stringify(result);
  }

  async getJobByVehicleId(vehicleId) {
    const cursor = await r.table(this.tableName)
      .filter({vehicleId})
      .orderBy(r.desc('createdAt'))
      .run(this.conn);
    const [ result ] = await cursor.toArray();

    return JSON.stringify(result);
  }

  async addJob(vehicleId, start = r.now(), end = '', createdAt = r.now(), updatedAt = r.now()) {
    const result = await r.table(this.tableName).insert({
      vehicleId,
      start,
      end,
      createdAt,
      updatedAt
    })
    .run(this.conn);

    return JSON.stringify(result);
  }

  async removeJob(id) {
    const result = await r.table(this.tableName)
      .filter({id})
      .delete()
      .run(this.conn);

    return JSON.stringify(result);
  }

  async updateJob(id, end = r.now()) {
    const result = await r.table(this.tableName)
      .filter({id})
      .update({
        'end': end
      })
      .run(this.conn);

    return JSON.stringify(result);
  }
}