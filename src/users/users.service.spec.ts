import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import * as uuid from 'uuid';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await service.createUser('test@example.org', 'password123', uuid.v4());

    expect(user.email).toEqual('test@example.org');
  })
});
