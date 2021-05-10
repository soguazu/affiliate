import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
  product: String,
  category: String,
  country: String,
  // userID: String,
  userID: Schema.Types.ObjectId,
  url: String,
  is_deleted: {
    type: Boolean,
    default: false,
  },
  modification_notes: [ModificationNote],
});

export default mongoose.model('affiliates', schema);
