import { Injectable } from '@nestjs/common';
import { HelloWorld, oWorld } from './hello-world.model';
import { createWorldDto } from './hello-world.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HelloWorldService {
  hello: HelloWorld;

  getHelloWorld(): HelloWorld {
    return this.hello;
  }

  getWorld(hell: string): HelloWorld {
    return hell == this.hello?.hell
      ? this.hello
      : { hell: 'here', oWorld: oWorld.oWorld };
  }

  async createWorld(createWorld: createWorldDto): Promise<HelloWorld> {
    const { hell } = createWorld;
    const { username } = createWorld;
    const { password } = createWorld;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const comparePassword = await bcrypt.compare(password, hashedPassword);

    console.log(username, hashedPassword, comparePassword);

    const helloWorld: HelloWorld = {
      hell: hell,
      oWorld: oWorld.oWorld,
    };
    console.log(process.env);

    this.hello = helloWorld;
    return helloWorld;
    
  }

  deleteWorld(hell: string): string | HelloWorld {
    return hell === 'hell'
      ? { hell: '', oWorld: oWorld.oWorld }
      : 'that is not a hell';
  }

  patchWorld(hell: string): HelloWorld {
    Object.keys('hell');
    this.hello.hell = Object.values(hell).toString();
    return this.hello;
  }
}
