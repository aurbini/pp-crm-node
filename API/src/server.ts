import { AppDataSource } from './data-source';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import baseRouter from './route';
const HttpError = require('./models/http-error');

class Server {
  private app;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.config();
  }

  private async config() {
    try {
      //database connection
      try {
        await AppDataSource.initialize();
        console.log('database connected on port ' + 3306);
      } catch (err) {
        console.log(err);
      }
      //Server config
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(bodyParser.json());
      this.routerConfig();
      // this.app.use(express.static(path.join(__dirname, 'public')));
    } catch (err) {
      console.log('database connection refused with error' + err);
    }
  }
  //kl
  //Routes
  private routerConfig() {
    this.app.use('/', baseRouter);
    this.app.use((req, res, next) => {
      const error = new HttpError('Could not find this route.', 404);
      throw error;
    });
    this.app.use((error, req, res, next) => {
      if (res.headerSent) {
        return next(error);
      }
      res.status(error.code || 500);
      res.redirect('/server-error');
    });
  }
  //Start server
  public start = (port: number | string) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          console.log('app listening on : ' + port);
          resolve(port);
        })
        .on('error', (err: Object) => reject(err));
    });
  };
}

const server = new Server();
server.start(process.env.PORT || 500);

export default Server;
