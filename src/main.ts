/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // criação da aplicação nest, crição da aplicação

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Douglas Santos","https://github.com/DougSan7","DouglasSantosWrk@hotmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; //config pra horario do brasil

  app.useGlobalPipes(new ValidationPipe()); //config de validação de dados de entrada

  app.enableCors(); //config de cors pra permitir requisições de outras origens.

  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, config da porta do server.
}
bootstrap();
