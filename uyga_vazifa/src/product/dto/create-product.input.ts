// src/product/dto/create-product.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int)
  price: number;
}
