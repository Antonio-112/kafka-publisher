import { Injectable, Logger, Inject } from '@nestjs/common';
import { KafkaRepository } from '../infra/kafka/kafka.repository';
import { KafkaData } from '../infra/kafka/model/kafka.model';

@Injectable()
export class ApiService {
  private readonly _logger = new Logger(ApiService.name);
  constructor(
    @Inject('IKafkaClient')
    private readonly _kafkaRepository: KafkaRepository,
  ) {}

  // Process the message, then
  async sendToKafka(data: KafkaData): Promise<string> {
    try {
      await this._kafkaRepository.send(data);
      return `Message sent to Kafka topic "${data.topic}" with message "${data.message}"`;
    } catch (error) {
      // Considerar lanzar un error personalizado en lugar de devolver un string con el error
      return `Failed to send message to Kafka: ${error.message}`;
    }
  }
}
