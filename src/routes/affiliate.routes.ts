import { Application, Request, Response } from 'express';
import { AffiliateController } from '../controllers/affiliateController';
import authorization from '../middleware/authorization';

export class AffiliateRoutes {
  private affiliate_controller: AffiliateController = new AffiliateController();

  public route(app: Application) {
    /**
     * @apiDefine CheckerBadRequestError
     *
     * @apiError BadRequest Invalid payload passed.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "BadRequest"
     *     }
     */

    /**
     * @api {post} /api/affiliate
     * @apiHeader  {String} [authorization="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MjA2Njg0NzMsImV4cCI6MTY1MjIwNDQ3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJKb2hubnkgUm9jayIsIkVtYWlsIjoianJvY2tldEBleGFtcGxlLmNvbSIsIlJvbGUiOiJBZmZpbGlhdGUiLCJ1c2VybmFtZSI6IlwidGVzdGluZ1wiIiwidXNlcklEIjoiNjA5OTFjOWQ1Nzk2OGRiYjZkZjc5YTg0In0.Qyhh6TUrfHk3UW-KkjgMO76l6qr2HmscgJI1461G77E"] Basic token authorization appending Bearer
     * @apiHeader  [Accept=application/json] application/json, application/xml, text/yaml, text/plain.
     * @apiHeader  [Content-Type=application/x-www-form-urlencoded] application/x-www-form-urlencoded.
     * @apiName create url
     * @apiGroup affiliate
     * @apiParam {String} product_id Product unique id
     * @apiParam {String} category_id  category unique id
     * @apiParam {String} country  selected country
     * @apiParamExample Example Body:
     * {
     *   "product_id": "",
     *   "category_id": "",
     *   "country": "",
     * }
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *        status: true,
     *        message: New affiliate url created,
     *        url: ""
     *     }
     * @apiUse CheckerBadRequestError
     */
    app.post('/api/affiliate', authorization, (req: Request, res: Response) => {
      this.affiliate_controller.createAffiliateUrl(req, res);
    });
  }
}
