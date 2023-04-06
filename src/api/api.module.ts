import { Module, Provider } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

const provider: Provider[] = [
  {
    provide: 'IAppService',
    useClass: ApiService,
  },
];

@Module({
  controllers: [ApiController],
  providers: provider,
})
export class ApiModule {}
