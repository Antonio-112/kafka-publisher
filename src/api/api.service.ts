import { Inject, Injectable, Logger } from '@nestjs/common';
import { KafkaData } from 'src/infra/kafka/model/kafka.model';
import { KafkaRepository } from '../infra/kafka/kafka.repository';

@Injectable()
export class ApiService {
  private readonly _logger = new Logger(ApiService.name);
  constructor(
    @Inject('IKafkaClient')
    private readonly _kafkaRepository: KafkaRepository,
  ) {}

  async sendToKafka(data: KafkaData): Promise<string> {
    try {
      await this._kafkaRepository.send(data);
      return `Message sent to Kafka topic "${data.topic}" with message "${data.message}"`;
    } catch (error) {
      return `Failed to send message to Kafka: ${error.message}`;
    }
  }
}
