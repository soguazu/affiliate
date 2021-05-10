import { Request, Response } from 'express';
import uuid from 'uuidv4';
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
    if (req.body.country && req.body.product_id && req.body.category_id) {
      const affiliate_params: IAffiliate = {
        ...req.payload,
        url: `http://localhost:3000?product=${req.payload.product}&token=${req.payload.userID}`,
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
