export class BaseEntity {
  _id: string;
  dateCreated: Date;
  dateModified: Date;

  constructor(options?: any) {
    if (options) {
      this._id = options._id;
      if (!options.dateCreated) {
        this.dateCreated = new Date;
      } else {
        this.dateModified = new Date();
      }
    } else {
      this.dateCreated = new Date();
    }
  }
}
