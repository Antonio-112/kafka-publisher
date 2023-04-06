import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(@Inject('IAppService') private readonly apiService: ApiService) {}

  @Post('publish')
  async getHello(
    @Body() data: { topic: string; message: string },
  ): Promise<string> {
    return this.apiService.sendToKafka(data);
  }
}
