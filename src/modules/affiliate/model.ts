import { ModificationNote } from '../common/model';

export interface IAffiliate {
  _id?: String;
  product: String;
  category: String;
  country: String;
  userID: String;
  url: String;
  is_deleted?: {
    type: Boolean;
    default: false;
  };
  modification_notes: [ModificationNote];
}
