import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
