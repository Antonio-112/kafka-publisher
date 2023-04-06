import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { KafkaModule } from './infra/kafka/kafka-module';

@Module({
  imports: [ApiModule, KafkaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
