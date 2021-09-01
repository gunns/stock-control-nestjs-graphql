import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VariantService } from './variant.service';
import { CreateVariantInput } from './dto/create-variant.input';
import { UpdateVariantInput } from './dto/update-variant.input';

@Resolver('Variant')
export class VariantResolver {
  constructor(private readonly variantService: VariantService) {}

  @Mutation('createVariant')
  create(@Args('createVariantInput') createVariantInput: CreateVariantInput) {
    return this.variantService.create(createVariantInput);
  }

  @Query('variant')
  findAll() {
    return this.variantService.findAll();
  }

  @Query('variant')
  findOne(@Args('id') id: number) {
    return this.variantService.findOne(id);
  }

  @Mutation('updateVariant')
  update(@Args('updateVariantInput') updateVariantInput: UpdateVariantInput) {
    return this.variantService.update(
      updateVariantInput.id,
      updateVariantInput,
    );
  }

  @Mutation('removeVariant')
  remove(@Args('id') id: number) {
    return this.variantService.remove(id);
  }
}
