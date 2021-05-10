import express from 'express';
import helmet from 'helmet';
// import * as mongoose from 'mongoose';
import { connect } from 'mongoose';

import { TestRoutes } from '../routes/test_routes';
import { AffiliateRoutes } from '../routes/affiliate.routes';
import environment from '../environment';

class App {
  public app: express.Application;
  public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

  private test_routes: TestRoutes = new TestRoutes();
  private affiliate_routes: AffiliateRoutes = new AffiliateRoutes();
  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.test_routes.route(this.app);
    this.affiliate_routes.route(this.app);
  }
  private config(): void {
    // support application/json type post data
    this.app.use(express.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
  }

  private mongoSetup(): void {
    console.log(this.mongoUrl);
    connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    // .then(() => console.log('Connected successfully'))
    // .catch((error) => console.log('An error ocurred: ', error));
  }
}
export default new App().app;
