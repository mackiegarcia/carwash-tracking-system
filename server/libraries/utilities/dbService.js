import r from 'rethinkdb';

export default class DbService {
  constructor(host, port, db){
    this.host = host;
    this.port = port;
    this.db = db;
  }

  async connectDb(){
    // const connecttion = r.connect({
    //   host: 'localhost',
    //   port: 28015,
    //   db: 'ctsdb'
    // });

    return r.connect({
      host: this.host,
      port: this.port,
      db: this.db
    });
  }
}