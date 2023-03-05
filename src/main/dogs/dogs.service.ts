import { Injectable } from "@nestjs/common";
import { MetricsReporter } from "../metrics/metric.reporter";
import { DogCreatedMetricEvent, DogDeletedMetricEvent } from "../metrics/schemas/dog.created.metric";
import { DogsDao } from "./dogs.dao";
import { Dog, DogNoId } from "./schemas/dog.schema";

@Injectable()
export class DogsService {

  constructor(private readonly dogsDao: DogsDao,
              private readonly metricReporter: MetricsReporter) {}

  async getById(id: any): Promise<Dog> {
    return this.dogsDao.getById(id);
  }

  async save(dog: DogNoId): Promise<Dog> {
    const id =  await this.dogsDao.save(dog);
    this.metricReporter.sendMetric(new DogCreatedMetricEvent(id, dog.name));
    return this.dogsDao.getById(id);
  }

  deleteById(id: any): void {
    this.dogsDao.deleteById(id)
    this.metricReporter.sendMetric(new DogDeletedMetricEvent(id));
  }

}