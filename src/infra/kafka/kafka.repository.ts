import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KafkaData } from './model/kafka.model';

export class KafkaRepository implements OnModuleInit {
  private readonly _logger = new Logger(KafkaRepository.name);
  constructor(
    @Inject('CLIENT_KAFKA') private readonly _clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    try {
      await this._clientKafka.connect();
      this._logger.log('Connected to Kafka broker');
    } catch (err) {
      this._logger.error(`Failed to connect to Kafka broker: ${err}`);
    }
  }
  async send(data: KafkaData): Promise<void> {
    const { topic, message } = data;
    this._logger.debug(data);

    this._clientKafka.emit(topic, message).subscribe({
      next: (response) => {
        this._logger.debug(
          `Response from Kafka broker: ${JSON.stringify(response)}`,
        );
      },
      error: (error) => {
        this._logger.error(`Error sending message to Kafka broker: ${error}`);
        throw error; // opcional, lanzar el error para que lo maneje el código que llama a esta función
      },
    });
  }
}
