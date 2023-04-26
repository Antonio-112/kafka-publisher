import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KafkaData } from './model/kafka.model';

export class KafkaRepository implements OnModuleInit {
  private readonly _logger = new Logger(KafkaRepository.name);
  constructor(
    @Inject('CLIENT_KAFKA') private readonly _clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    try {
      await this._clientKafka.connect();
      this._logger.log('Connected to Kafka broker');
    } catch (err) {
      this._logger.error(`Failed to connect to Kafka broker: ${err}`);
      // Considerar agregar un mecanismo de alerta en caso de que no se pueda establecer la conexión
    }
  }
  async send(data: KafkaData): Promise<void> {
    const { topic, message } = data;

    this._logger.debug(data);

    this._clientKafka.emit(topic, message).subscribe({
      next: (response) => {
        this._logger.debug(
          `Response from Kafka broker: ${JSON.stringify(response)}`,
        );
        // Considerar manejar las respuestas en función de su contenido, por ejemplo, errores en la respuesta
        // Considerar agregar un mecanismo de confirmación para garantizar que el mensaje se entregue correctamente
      },
      error: (error) => {
        this._logger.error(`Error sending message to Kafka broker: ${error}`);
        throw error; // opcional, lanzar el error para que lo maneje el código que llama a esta función
        // Considerar agregar un mecanismo de reintento en caso de fallar al enviar el mensaje
        // Considerar agregar un mecanismo de registro de errores y alerta en caso de errores recurrentes
      },
    });
  }
}
