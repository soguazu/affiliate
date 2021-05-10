import { ModificationNote } from '../common/model';

export interface IAffiliate {
  _id?: String;
  product: String;
  category: String;
  country: String;
  userID?: String;
  url?: String;
  is_deleted?: {
    type: Boolean;
    default: false;
  };
  modification_notes?: [ModificationNote];
}

export interface IUser {
  iss: String;
  iat: Number;
  exp: Number;
  aud: String;
  sub: String;
  name: String;
  Email: String;
  Role: String;
  username: String;
  userID: String;
}

declare global {
  namespace Express {
    interface Request {
      payload: IAffiliate;
      user: Object;
    }
  }
}
