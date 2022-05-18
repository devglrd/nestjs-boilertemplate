import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  clientToUser = {};

  identify(name: string, id: string) {
    this.clientToUser[id] = name;
    return Object.values(this.clientToUser);
  }
}
