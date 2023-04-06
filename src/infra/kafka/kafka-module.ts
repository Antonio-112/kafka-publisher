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
              /*               String(process.env.CLIENTE_SERVICE_KAFKA_HOST) +
                ':' +
                String(process.env.CLIENTE_SERVICE_KAFKA_PORT), */
              // local docker broker
              'localhost:29092',
            ],
          },
          // Other configuration options for authentication, etc.
          /*   ssl: {
                rejectUnauthorized: false,
                cert: String(process.env.CERT_PEM_ROUTE)
              },
              sasl: {
                mechanism: 'scram-sha-512',
                username: String(process.env.SASL_USERNAME),
                password: String(process.env.SASL_PASSWORD)
              } */
        },
      },
    ]),
  ],
  exports: provider,
  providers: provider,
})
export class KafkaModule {}
