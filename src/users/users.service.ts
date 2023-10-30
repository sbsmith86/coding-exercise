import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

export type User = {
    id: string;
    email: string;
    password: string;
    tenantId: number;
}

@Injectable()
export class UsersService {
  private readonly users = [];

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async createUser(email: string, password: string, tenantId: string): Promise<User> {
    this.users.push({
        email,
        password,
        tenantId,
        id: uuid.v4(),
    });

    return this.users[this.users.length - 1];
  }
}