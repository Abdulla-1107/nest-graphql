import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int)
  price: number;
}
