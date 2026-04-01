/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // criação da aplicação nest, crição da aplicação

  process.env.TZ = '-03:00'; //config pra horario do brasil

  app.useGlobalPipes(new ValidationPipe()); //config de validação de dados de entrada

  app.enableCors(); //config de cors pra permitir requisições de outras origens.

  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, config da porta do server.
}
bootstrap();
