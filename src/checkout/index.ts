import { DiscountSale } from "../discountSale";
import { IPricingRules, Cart } from "../interface";

export class Checkout {
  private pricingRules: IPricingRules;
  private cart: Cart;
  private discountSaleService: DiscountSale;

  constructor(pricingRules: IPricingRules) {
    // Create an instance of DiscountSale to handle discount-related operations
    this.discountSaleService = new DiscountSale(pricingRules);

    this.pricingRules = pricingRules;
    this.cart = {};
  }

  // Scan a product and add it to the cart
  scan(productSku: string) {
    this.cart[productSku] = (this.cart[productSku] || 0) + 1;
  }

  // Calculate the total price considering applied discounts
  total(): number {
    let total = 0;

    // Iterate through the items in the cart
    for (const productSku in this.cart) {
      // Check if any sale rules apply to the current product
      const saleProductPrice = this.applySaleRulesOnProduct(productSku);

      // Add the discounted price to the total if there's a discount, otherwise add the regular price
      total +=
        saleProductPrice > 0
          ? saleProductPrice
          : this.discountSaleService.calculateRegularProductPrice(
              productSku,
              this.cart
            );
    }

    // Clear the cart after calculating the total
    this.emptyCart();
    return total;
  }

  // Apply sale rules to a product and return the discounted price
  private applySaleRulesOnProduct(productSku: string): number {
    const bulkDiscount = this.discountSaleService.applyDiscountBulk(productSku, this.cart) ?? 0;
    const buyAPayBDiscount = this.discountSaleService.applyDiscountBuyAPayB(productSku, this.cart) ?? 0;
  
    // Return the maximum of the two discounts
    return Math.max(bulkDiscount, buyAPayBDiscount);
  }
  
  // Clear the cart
  private emptyCart() {
    this.cart = {};
  }
}
