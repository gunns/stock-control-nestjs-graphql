import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { VariantModule } from './variant/variant.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [
    AppService
  ],
  controllers: [
    AppController
  ],
  imports: [
    ProductsModule,
    VariantModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/example'),
  ],
})
export class AppModule {}
