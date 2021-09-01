import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  create(createProductInput: CreateProductInput) {
    const createdProduct = new this.productModel(createProductInput);
    return createdProduct.save();
    //const prod = new Product();
    //prod.brand = createdProduct.brand;
    //prod.type = createProductInput.type
    //return prod;
  }

  findAll() {
    console.log('find started');
    console.log('');
    return this.productModel.find().exec();
  }

  findOne(id: number) {
    return this.productModel.findById(id).exec();
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
