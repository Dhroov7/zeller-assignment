import { PRODUCTS } from "../constant";
import { Cart, IPricingRules } from "../interface";
import { Inventory } from "../inventory";

export class DiscountSale {
  private pricingRules: IPricingRules;
  private inventory: Inventory;

  constructor(pricingRules: IPricingRules) {
    this.pricingRules = pricingRules;
    this.inventory = new Inventory(PRODUCTS);
  }

  // Apply bulk discount to a product based on the cart quantity
  applyDiscountBulk(productSku: string, cart: Cart): number {
    if (!this.pricingRules.BULK_DISCOUNT[productSku]) {
      return 0;
    }

    const { discountedPrice, threshold } =
      this.pricingRules.BULK_DISCOUNT[productSku];

    if (cart[productSku] < threshold) return 0;

    return cart[productSku] * discountedPrice;
  }

  // Apply Buy A, Pay B discount to a product based on the cart quantity
  applyDiscountBuyAPayB(
    productSku: string,
    cart: Cart
  ): number {
    if (!this.pricingRules.BUYA_PAYB[productSku]) {
      return 0;
    }

    const { pay, buy } = this.pricingRules.BUYA_PAYB[productSku];

    if (cart[productSku] % buy === 0) {
      return (
        ((this.inventory.getProduct(productSku)?.price * cart[productSku]) /
          buy) *
        pay
      );
    }

    return 0;
  }

  // Calculate the regular price of a product without any discounts
  calculateRegularProductPrice(
    productSku: string,
    cart: Cart
  ): number {
    return this.inventory.getProduct(productSku)?.price * cart[productSku];
  }
}
