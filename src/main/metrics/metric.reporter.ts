import { Injectable, Logger } from "@nestjs/common";
import { MetricEvent } from "./schemas/dog.created.metric";

@Injectable()
export class MetricsReporter {

    constructor() {}

    async sendMetric(event: MetricEvent): Promise<void> {
        Logger.log("METRIC_EVENT " + JSON.stringify(event));
    }

}