import { Body, Controller, Inject, Logger, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  private readonly logger = new Logger(ApiController.name);
  constructor(@Inject('IAppService') private readonly apiService: ApiService) {}

  @Post('publish')
  async publish(
    @Body() data: { topic: string; message: string },
  ): Promise<string> {
    // Considerar agregar validación al cuerpo de la solicitud antes de enviarla al método sendToKafka
    return this.apiService.sendToKafka(data);
  }
}
