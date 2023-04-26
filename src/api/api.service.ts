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
      // Considerar agregar un mecanismo de validación y manejo de errores específicos de la aplicación
      await this._kafkaRepository.send(data);
      return `Message sent to Kafka topic "${data.topic}" with message "${data.message}"`;
    } catch (error) {
      // Considerar lanzar un error personalizado en lugar de devolver un string con el error
      // Considerar agregar un mecanismo de manejo de errores y registro de errores específicos de la aplicación
      return `Failed to send message to Kafka: ${error.message}`;
    }
  }
}
