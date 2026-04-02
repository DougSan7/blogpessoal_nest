/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import PostagemController from "./controller/postagem.controller";
import { TemaModule } from "../tema/tema.modules";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // Importa o Postagem como uma entidade do TypeOrmModule
    providers: [PostagemService], //Define a PostagemService como servidor
    controllers: [PostagemController], // 
    exports: [TypeOrmModule] // Exporta a TypeOrmModule
})
export class PostagemModule {}