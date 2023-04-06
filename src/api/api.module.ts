import { Module, Provider } from '@nestjs/common';
import { KafkaModule } from 'src/infra/kafka/kafka-module';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

const provider: Provider[] = [
  {
    provide: 'IAppService',
    useClass: ApiService,
  },
];

@Module({
  imports: [KafkaModule, KafkaModule],
  controllers: [ApiController],
  providers: [...provider],
})
export class ApiModule {}
