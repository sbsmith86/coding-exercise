import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', () => {
    const product = service.create({
      name: 'Product 1',
      tenantId: 1,
    });

    expect(product.name).toEqual('Product 1');
    expect(product.tenantId).toEqual(1);
  });

  it('should search a product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1
      }
    ]
    const products = service.search('Product 1');
    expect(products).toEqual(service.products[0]);
  });

  it('should find all products', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1
      },
    ]
    const products = service.findAll();
    expect(products).toEqual(service.products);
  });

  it('should remove a product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1
      },
    ]
    const product = service.remove(1);
    expect(product).toEqual(service.products[0]);
  });

  it('should find one product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1
      },
    ]
    const product = service.findOne(1);
    expect(product).not.toBeNull();
  });

  it('should update a product', () => {
    service.products = [
      {
        name: 'Product 1',
        tenantId: 1,
        id: 1
      },
    ]
    const product = service.update(1, {
      name: 'Product 2',
      tenantId: 2,
    });
    expect(product).not.toBeNull();
  });
});
