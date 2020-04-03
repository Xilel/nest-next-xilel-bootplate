import { NestFactory } from '@nestjs/core';

import { AppModule } from './application.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.listen(3000);
}

try {
  bootstrap();
} catch (error) {
  console.error(error);
}
