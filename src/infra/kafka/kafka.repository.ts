import { Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

export class KafkaRepository {
  constructor(
    @Inject('CLIENT_KAFKA') private readonly _clientKafka: ClientKafka,
  ) {}
}
