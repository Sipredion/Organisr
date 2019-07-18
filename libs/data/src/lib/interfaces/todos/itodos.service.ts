import { ITodo } from './itodos.interface';

export interface ITodosService {
  findAll(): Promise<ITodo[]>;
  findById(ID: number): Promise<ITodo | null>;
  create(todo: ITodo): Promise<ITodo>;
  update(ID: number, newValue: ITodo): Promise<ITodo | null>;
  delete(ID: number): Promise<string>;
}
