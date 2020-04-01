import { Controller, Get, Query, Render } from '@nestjs/common';
import { IndexPageDTO } from "@dto/indexPage"

@Controller()
export class AppController {
  @Render('Index')
  @Get()
  public index(@Query('name') name?: string): IndexPageDTO {
    return {
      text: name
    };
  }

  @Render('About')
  @Get('/about')
  public About() {
    return;
  }
}
