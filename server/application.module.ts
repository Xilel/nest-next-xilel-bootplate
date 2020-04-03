import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';

import { AppController } from './app.controller';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true, dir: './client', customServer: true }),
    ),
  ],
  controllers: [AppController],
})
export class AppModule { }
