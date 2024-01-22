import { IProduct } from "../interface";

export class Inventory {
  private products: Record<string, IProduct>;

  constructor(products: Record<string, IProduct>) {
    this.products = products;
  }

  // Get a product based on its SKU
  getProduct(productSku: string): IProduct | undefined {
    return this.products[productSku];
  }
}
