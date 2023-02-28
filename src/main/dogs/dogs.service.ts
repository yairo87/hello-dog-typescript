import { Injectable } from "@nestjs/common";
import { DogsDao } from "./dogs.dao";
import { Dog, DogNoId } from "./schemas/dog.schema";

@Injectable()
export class DogsService {

  constructor(private readonly dogsDao: DogsDao) {}

  async getById(id: any): Promise<Dog> {
    return this.dogsDao.getById(id);
  }

  async save(dog: DogNoId): Promise<Dog> {
    const id =  await this.dogsDao.save(dog);
    return this.dogsDao.getById(id);
  }
}