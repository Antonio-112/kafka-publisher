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
    this.logger.debug('');
    // Considerar agregar una capa de transformación de datos si es necesario antes de enviar los datos al servicio
    // Considerar manejar errores específicos y devolver códigos de estado HTTP apropiados
    return this.apiService.sendToKafka(data);
  }
}
