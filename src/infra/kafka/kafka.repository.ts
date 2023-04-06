import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

export class KafkaRepository implements OnModuleInit {
  constructor(
    @Inject('CLIENT_KAFKA') private readonly _clientKafka: ClientKafka,
  ) {}

  onModuleInit() {
    this._clientKafka.connect();
  }
}
