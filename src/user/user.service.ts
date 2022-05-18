import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateInput, UserCreateOutput } from './dto/user-create.dto';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  async userCreate(input: UserCreateInput): Promise<UserCreateOutput> {
    const user = this.userRepository.create(input);
    await user.save();
    return {
      user,
    };
  }

  async userGet(email: User['email']): Promise<User> {
    return await this.userRepository.findOneOrFail({ email });
  }

  async userGetById(id: User['id']): Promise<User> {
    return await this.userRepository.findOneOrFail({ id });
  }

  async register(input: UserCreateInput) {
    const user = this.userRepository.create(input);
    user.password = await bcrypt.hash(input.password, 10);
    await user.save();
    return {
      user,
    };
  }

  async index() {
    return await this.userRepository.find();
  }
}
