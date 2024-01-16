import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { HelloWorldService } from './hello-world/hello-world.service';

@Module({
  imports: [],
  controllers: [AppController, HelloWorldController],
  providers: [AppService, HelloWorldService],
})
export class AppModule {}
