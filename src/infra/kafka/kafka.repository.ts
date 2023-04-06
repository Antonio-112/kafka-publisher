import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

export class KafkaRepository implements OnModuleInit {
  private readonly _logger = new Logger(KafkaRepository.name);
  constructor(
    @Inject('CLIENT_KAFKA') private readonly _clientKafka: ClientKafka,
  ) {}

  onModuleInit() {
    this._clientKafka.connect();
  }

  async send(data: { topic: string; message: string }) {
    this._logger.debug(data);
    const { topic, message } = data;
    this._clientKafka.emit(topic, message);
  }
}
