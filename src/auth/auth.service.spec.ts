import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import * as uuid from 'uuid';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not return the user password', async () => {
    const user = await service.signUp('test@example.org', 'password123', uuid.v4());
    expect(user.password).toBeUndefined();
    expect(user.email).toEqual('test@example.org');
  });

  it('should sign in a user', async () => {
    await service.signUp('test@example.org', 'password123', uuid.v4());
    const signedInUser = await service.signIn('test@example.org', 'password123');
    expect(signedInUser).toBeDefined();
    expect(signedInUser.access_token).toBeDefined();
  });

  it('should not sign in a user with an incorrect password', async () => {
    await service.signUp('test@example.org', 'password123', uuid.v4());
    try {
      await service.signIn('test@example.org', 'password1234');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toEqual('Invalid password');
    }
  });
});
