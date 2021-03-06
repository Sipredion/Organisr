import { Document } from 'mongoose';

export interface ITodo extends Document {
  readonly title: string;
  readonly description: string;
  readonly isComplete: boolean;
}
