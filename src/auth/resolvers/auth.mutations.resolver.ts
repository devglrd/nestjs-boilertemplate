import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { AuthLoginOutput, RegisterOutput } from '../dto/auth-login.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { UserService } from '../../user/user.service';
import { UserCreateInput } from '../../user/dto/user-create.dto';
import { User } from '../../user/models/user.model';

@Resolver(User)
export class AuthMutationsResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthLoginOutput)
  async authLogin(
    @Context('req') req,
    @Args('username') _username: string,
    @Args('password') _password: string,
  ) {
    return this.authService.login(req.user);
  }

  @Mutation(() => RegisterOutput)
  async register(@Args('input') input: UserCreateInput) {
    return await this.userService.register(input);
  }
}
