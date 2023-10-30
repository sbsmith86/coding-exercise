import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { jwtConstants } from './auth/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ProductModule, AuthModule, UsersModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
