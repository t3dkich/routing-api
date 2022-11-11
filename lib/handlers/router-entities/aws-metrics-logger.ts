import { IMetric, MetricLoggerUnit } from '@eclips3e3/smart-order-router-maistestsubnet-modded'
import { MetricsLogger as AWSEmbeddedMetricsLogger } from 'aws-embedded-metrics'

export class AWSMetricsLogger implements IMetric {
  constructor(private awsMetricLogger: AWSEmbeddedMetricsLogger) {}

  public putDimensions(dimensions: Record<string, string>): void {
    this.awsMetricLogger.putDimensions(dimensions)
  }

  public putMetric(key: string, value: number, unit?: MetricLoggerUnit): void {
    this.awsMetricLogger.putMetric(key, value, unit)
  }
}
