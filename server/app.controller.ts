import { IndexPageDTO } from '@dto/indexPage';
import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Render('index')
  @Get()
  public index(@Query('name') name?: string): IndexPageDTO {
    return {
      text: name,
    };
  }

  @Render('about')
  @Get('/about')
  public About() {
    return;
  }
}
