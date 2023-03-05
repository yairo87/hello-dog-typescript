import { Module } from "@nestjs/common";
import { MetricsReporter } from "../metrics/metric.reporter";
import { DogsController } from "./dogs.controller";
import { DogsDao } from "./dogs.dao";
import { DogsService } from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogsService, DogsDao, MetricsReporter],
  })
  export class DogsModule {
  
  }
  