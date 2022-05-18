import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

@ObjectType()
export class AuthLoginOutput {
  @Field(() => String)
  accessToken: string;
}

@ObjectType()
export class RegisterOutput {
  @Field(() => User)
  user: string;
}
