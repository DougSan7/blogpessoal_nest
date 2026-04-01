/* eslint-disable prettier/prettier */
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from './../services/postagem.service';
import { Body, Controller, Get, Post, Delete, Put, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";

@Controller("/postagens")
export default class PostagemController{
  constructor (private readonly PostagemService: PostagemService){ }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.PostagemService.findAll();
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id:number){
    return this.PostagemService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param('titulo') titulo:string): Promise<Postagem[]>{
    return this.PostagemService.findByTitulo(titulo);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem:Postagem): Promise<Postagem>{
    return this.PostagemService.create(postagem);
  }
  
    @Put()
    @HttpCode(HttpStatus.OK)
    update (@Body() postagem:Postagem): Promise<Postagem>{
      return this.PostagemService.update(postagem);
    }


  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id:number){
    return this.PostagemService.delete(id);
  }


}
