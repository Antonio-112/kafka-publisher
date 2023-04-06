import { Inject, Injectable } from '@nestjs/common';
import { KafkaRepository } from '../infra/kafka/kafka.repository';

@Injectable()
export class ApiService {
  constructor(
    @Inject('IKafkaClient')
    private readonly _kafkaRepository: KafkaRepository,
  ) {}

  async sendToKafka(data: { topic: string; message: string }): Promise<string> {
    await this._kafkaRepository.send(data);
    return '';
  }
}
