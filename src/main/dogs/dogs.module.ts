import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { DogsDao } from "./dogs.dao";
import { DogsService } from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogsService, DogsDao],
  })
  export class DogsModule {
  
  }
  