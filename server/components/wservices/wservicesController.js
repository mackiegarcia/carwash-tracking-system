import r from 'rethinkdb';

export default class WserviceController {
  constructor(dbconn){
    this.conn = dbconn;
    this.tableName = 'wservice';
  }


  async getWservicesByJobId(jobId) {
    const cursor = await r.table(this.tableName)
      .filter({jobId})
      .orderBy(r.desc('createdAt'))
      .run(this.conn);
    const result  = await cursor.toArray();

    return JSON.stringify(result);
  }

  async addWservice(jobId, type = '', createdAt = r.now(), updatedAt = r.now()) {
    const result = await r.table(this.tableName).insert({
      jobId,
      type,
      createdAt,
      updatedAt
    })
    .run(this.conn);

    return JSON.stringify(result);
  }

  async removeWservice(id) {
    const result = await r.table(this.tableName)
      .filter({id})
      .delete()
      .run(this.conn);

    return JSON.stringify(result);
  }
}