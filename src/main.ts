import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import config from './config.hostos';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: config.microserviceOptions
  });

  console.log(`Log service is running on port: ${config.microserviceOptions.port}`);

  await app.listen();
}
bootstrap();
