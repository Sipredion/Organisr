import { BaseEntity } from './base-entity.model';

export class Todo extends BaseEntity {
  title: string;
  description?: string;
  isComplete?: boolean;

  constructor(options?: any) {
    super(options);
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }
}
