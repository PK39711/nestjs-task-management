import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';
import { HelloWorld } from './hello-world.model';
import { createWorldDto } from './hello-world.dto';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private helloWorldService: HelloWorldService) {}

  @Get('/getWorld')
  getHelloWorld(): HelloWorld {
    return this.helloWorldService.getHelloWorld();
  }

  @Get('/:hell')
  getWorld(@Param('hell') hell: string): HelloWorld {
    return this.helloWorldService.getWorld(hell);
  }

  @Post('/createWorld')
  async createWorld(
    @Body() createWorldDto: createWorldDto,
  ): Promise<HelloWorld> {
    return await this.helloWorldService.createWorld(createWorldDto);
  }

  @Delete('/deleteWorld/:hell')
  deleteWorld(@Param('hell') hell: string): string | HelloWorld {
    return this.helloWorldService.deleteWorld(hell);
  }

  @Patch('/patchWorld')
  patchWorld(@Body() hell: string): HelloWorld {
    return this.helloWorldService.patchWorld(hell);
  }
}
