import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true })
  type: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
