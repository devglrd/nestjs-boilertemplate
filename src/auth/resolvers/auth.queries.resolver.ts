import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '../../user/models/user.model';
import { UserService } from '../../user/user.service';
import { CurrentUser, JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JWTPayload } from '../auth.service';
import { UseGuards } from '@nestjs/common';

@Resolver(User)
export class AuthQueriesResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  async me(@CurrentUser() user: JWTPayload) {
    return user;
  }
}
