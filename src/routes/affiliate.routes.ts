import { Application, Request, Response } from 'express';
import { AffiliateController } from '../controllers/affiliateController';

export class AffiliateRoutes {
  private affiliate_controller: AffiliateController = new AffiliateController();

  public route(app: Application) {
    app.post('/api/affiliate', (req: Request, res: Response) => {
      this.affiliate_controller.createAffiliateUrl(req, res);
    });
  }
}
