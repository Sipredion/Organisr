import { Controller, Get, Response, HttpStatus, Param, Body, Post, Patch, Delete, Put } from '@nestjs/common';
import { CreateTodoDto } from '@organisr/data';
import { TodosService } from '../services/todos.service';

@Controller('todos')
export class TodosController {

  constructor(private readonly todosService: TodosService) {
  }

  @Get()
  public async getTodos(@Response() res) {
    const todos = await this.todosService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }

  @Get('/:id')
  public async getTodo(@Response() res, @Param() param){
    const todos = await this.todosService.findById(param.id);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post()
  public async createTodo(@Response() res, @Body() createTodoDTO: CreateTodoDto) {

    const todo = await this.todosService.create(createTodoDTO);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Put('/:id')
  public async updateTodo(@Param() param, @Response() res, @Body() body) {

    const todo = await this.todosService.update(param.id, body);
    return res.status(HttpStatus.OK).json(todo);
  }

  @Delete('/:id')
  public async deleteTodo(@Param() param, @Response() res) {

    const todo = await this.todosService.delete(param.id);
    return res.status(HttpStatus.OK).json(todo);
  }

}
