import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductService {
  products: Product[] = [];

  constructor() {}

  create(createProductDto: CreateProductDto) {
    if (!createProductDto.tenantId) {
      throw new Error('Tenant ID is required');
    }

    const product = new Product();
    product.name = createProductDto.name;
    product.tenantId = createProductDto.tenantId;

    return product;
  }

  search(term: string) {
    return this.products.find((product) => product.name.includes(term));
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.filter((product) => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.products.find((product) => product.id === id);
    product.name = updateProductDto.name;
    product.tenantId = updateProductDto.tenantId;

    return product;
  }

  remove(id: number) {
    return this.products.find(product => product.id === id);
  }
}
