import { IsNotEmpty, IsString } from 'class-validator';

export class KafkaDataDto {
  @IsNotEmpty()
  @IsString()
  topic: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
