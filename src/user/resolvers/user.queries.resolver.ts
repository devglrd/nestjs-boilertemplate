import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { UserIndexOutput } from '../dto/user-index.dto';

@Resolver(User)
export class UserQueriesResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserIndexOutput])
  async users() {
    const users = await this.userService.index();
    console.log(users);
    return users;
  }
}
