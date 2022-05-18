import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.use(compression());

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT, '0.0.0.0');
  console.log(
    `Server listen on ${process.env.PORT}, see http://${process.env.URL}:${process.env.PORT}/graphql for see result`,
  );
}

bootstrap();
