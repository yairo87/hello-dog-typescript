import { Injectable, NotFoundException } from "@nestjs/common";
import { Dog, DogNoId } from "./schemas/dog.schema";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class DogsDao {

  private dogsMap: Map<string, Dog>

  constructor() {
    this.dogsMap = new Map<string, Dog>()
  }

  async getById(id: any): Promise<Dog> {
    const dog: Dog = this.dogsMap.get(id);
    if (dog === undefined){
      throw new NotFoundException('Dog with id ' + id + ' was not found.')
    }
    return dog;
  }

  async save(dog: DogNoId): Promise<String> {
    const dogId = uuidv4();
    this.dogsMap.set(dogId, { ...dog, id: dogId});
    return dogId;
  }

  deleteById(id: any): void {
    this.dogsMap.delete(id);
  }

}