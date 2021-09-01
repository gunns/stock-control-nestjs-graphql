import * as mongoose from 'mongoose';
import { Product } from './../../products/entities/product.entity';
import { Prop, Schema } from '@nestjs/mongoose';

export type VariantDocument = Variant & Document;

@Schema()
export class Variant {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;
  @Prop()
  name: string;
  @Prop()
  color: string;
  @Prop()
  size: number;
  @Prop()
  stock: string;
}
