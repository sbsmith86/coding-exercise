import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { AuthModule } from '../auth/auth.module';
import { AuthController } from '../auth/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { UsersModule } from '../users/users.module';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // all API methods should be tested
  it('should create a product', async () => {
    const user = await authController.signUp({ email: 'test@example.org', password: 'password123', tenantId: 1 });
    await authController.signIn({ email: 'test@example.org', password: 'password123' });
    await controller.create({ name: 'Product 1' }, { user: user });
  });

  it('should search a product that does not exist', async () => {
    const matchingProducts = await controller.search('Product 2');
    expect(matchingProducts).toBeUndefined();
  });

  it('should update a product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1,
      },
    ];

    const updatedProduct = controller.update('1', {
      name: 'Product 2',
      tenantId: 2,
    });

    expect(updatedProduct.name).toEqual('Product 2');
  });

  it('should find products', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1,
      },
    ];

    const products = controller.findAll();
    expect(products).toEqual(service.products);
  });

  it('should find one product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1,
      },
    ];

    const product = controller.findOne('1');
    expect(product).not.toBeNull();
  });

  it('should remove a product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1,
      },
    ];
    
    const product = controller.remove('1');
    expect(product).toEqual(service.products[0]);
  });
});
