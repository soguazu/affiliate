import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import {
  insufficientParameters,
  mongoError,
  successResponse,
} from '../modules/common/service';
import Model from '../modules/affiliate/schema';
import Repo from '../repository/MongooseBaseRepository';
import { IAffiliate } from '../modules/affiliate/model';

export class AffiliateController {
  private repo: Repo = new Repo({ Model });

  public createAffiliateUrl(req: Request, res: Response) {
    // this check whether all the filds were send through the erquest or not
    if (req.body.country && req.body.product && req.body.category) {
      const affiliate_params: IAffiliate = {
        product: req.body.product.name,
        category: req.body.category.name,
        country: req.body.country,
        userID: '60991c9d57968dbb6df79a84',
        url: '',
        modification_notes: [
          {
            modified_on: new Date(Date.now()),
            modified_by: '',
            modification_note: 'New affiliate url created',
          },
        ],
      };
      try {
        const affiliate_data = this.repo.create(affiliate_params);
        successResponse('create url successfully', affiliate_data, res);
      } catch (error) {
        mongoError(error, res);
      }
    } else {
      // error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }
}
