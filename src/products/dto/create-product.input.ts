import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductInput {
  @IsString()
  name: string;
  @IsString()
  brand: string;
  @IsNotEmpty()
  type: string;
}
