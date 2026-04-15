/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.modules';
import { TemaModule } from './tema/tema.modules';
import { AuthModule } from './auth/auth.modules';
import { UsuarioModule } from './usuario/usuario.modules';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
	  useClass: ProdService,
    imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    AuthModule, 
    UsuarioModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
