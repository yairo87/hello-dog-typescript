export type MetricEvent = {
  metricId: number;
}

export class DogCreatedMetricEvent implements MetricEvent {
  metricId: number;

  constructor(public id:string, public name:string) {
    this.metricId = 1;
    this.id = id;
    this.name = name;
  }
}

export class DogDeletedMetricEvent implements MetricEvent {
  metricId: number;

  constructor(public id:string) {
    this.metricId = 2;
    this.id = id;
  }
}