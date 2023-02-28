import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { Dog, DogNoId } from "./schemas/dog.schema";


@Controller('dogs')
export class DogsController {

  private readonly logger = new Logger(DogsController.name);
  constructor(private readonly dogsService: DogsService) {}

  @Get('/:id')
  async getById(@Param('id') id): Promise<Dog> {
    this.logger.log("getting dog id " + JSON.stringify(id));
    return this.dogsService.getById(id);
  }

  @Post()
  async createDog(@Body() dog: DogNoId): Promise<Dog> {
    this.logger.log("creating new dog " + JSON.stringify(dog));
    return this.dogsService.save(dog);
  }
    
}