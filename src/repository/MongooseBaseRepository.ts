class MongooseRepository {
  Collection: any;
  constructor({ Model }: any) {
    this.Collection = Model;
  }

  async count() {
    return this.Collection.estimatedDocumentCount();
  }

  async find(query = {}, { multiple = true, count, lean }: any = {}) {
    const results = multiple
      ? this.Collection.find(query)
      : this.Collection.findOne(query);

    if (count) {
      return results.countDocuments().exec();
    }
    if (lean) {
      return results.lean().exec();
    }
    return results.exec();
  }

  async create(body: any) {
    const document = new this.Collection(body);

    return document.save();
  }

  async update(document: any, body = {}) {
    const id = typeof document._id !== 'undefined' ? document._id : document;

    return this.Collection.findByIdAndUpdate(id, body, { new: true });
  }
}

export default MongooseRepository;
