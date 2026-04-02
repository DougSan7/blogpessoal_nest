/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from './entities/tema.entity';
import { TemaService } from "./temaservice/tema.service";
import { TemaController } from "./controller/tema.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])], // Importa o Tema como uma entidade do TypeOrmModule
    providers: [TemaService], //
    controllers: [TemaController], // 
    exports: [TemaService] //  - xporta a TypeOrmModule
})
export class TemaModule {}