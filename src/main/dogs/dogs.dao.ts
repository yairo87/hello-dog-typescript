import { Injectable } from "@nestjs/common";
import { Dog, DogNoId } from "./schemas/dog.schema";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class DogsDao {

  private dogsMap: Map<string, Dog>

  constructor() {
    this.dogsMap = new Map<string, Dog>()
  }

  async getById(id: any): Promise<Dog> {
    return this.dogsMap.get(id);
  }

  async save(dog: DogNoId): Promise<String> {
    const dogId = uuidv4();
    this.dogsMap.set(dogId, { ...dog, id: dogId});
    return dogId;
  }

}