/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { TemaModule } from './tema/tema.modules';
import { Tema } from './tema/entities/tema.entity';
import { AuthModule } from './auth/auth.modules';
import { UsuarioModule } from './usuario/usuario.modules';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // type do database
      host: 'localhost', // host do database
      port: 3306, // porta do database
      username: 'root', // usuario do database
      password: '159875321', // senha do database
      database: 'db_blogpessoal', // nome do banco de dados no MySQL
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
      logging: false,
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
