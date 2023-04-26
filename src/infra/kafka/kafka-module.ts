import { Module, Provider } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaRepository } from './kafka.repository';

const provider: Provider[] = [
  {
    provide: 'IKafkaClient',
    useClass: KafkaRepository,
  },
];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [
              // Configurar brokers desde variables de entorno o usar el valor predeterminado 'localhost:29092'
              process.env.CLIENTE_SERVICE_KAFKA_HOST
                ? `${String(process.env.CLIENTE_SERVICE_KAFKA_HOST)}:${String(
                    process.env.CLIENTE_SERVICE_KAFKA_PORT,
                  )}`
                : 'localhost:29092',
            ],
          },
          // Otras opciones de configuración para autenticación, etc.
          // Habilitar estas opciones si es necesario, asegurándose de que las variables de entorno correspondientes estén configuradas
          /* 
          ssl: {
            rejectUnauthorized: false,
            cert: String(process.env.CERT_PEM_ROUTE)
          },
          sasl: {
            mechanism: 'scram-sha-512',
            username: String(process.env.SASL_USERNAME),
            password: String(process.env.SASL_PASSWORD)
          } 
          */
        },
      },
    ]),
  ],
  exports: provider,
  providers: provider,
})
export class KafkaModule {}
