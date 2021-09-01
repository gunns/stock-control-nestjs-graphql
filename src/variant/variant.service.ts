import { VariantDocument } from './entities/variant.entity';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVariantInput } from './dto/create-variant.input';
import { UpdateVariantInput } from './dto/update-variant.input';

@Injectable()
export class VariantService {
  constructor(
    private readonly productsService: ProductsService,
    @InjectModel(Variant.name) private variantModel: Model<VariantDocument>,
  ) {}

  create(createVariantInput: CreateVariantInput) {
    return 'This action adds a new variant';
  }

  findAll() {
    return `This action returns all variant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variant`;
  }

  update(id: number, updateVariantInput: UpdateVariantInput) {
    return `This action updates a #${id} variant`;
  }

  remove(id: number) {
    return `This action removes a #${id} variant`;
  }
}
