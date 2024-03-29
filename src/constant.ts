import { IProduct } from "./interface";

export const PRODUCTS: Record<string, IProduct> = {
  ipd: {
    sku: "ipd",
    name: "Super iPad",
    price: 549.99,
  },
  mbp: {
    sku: "mbp",
    name: "MacBook Pro",
    price: 1399.99,
  },
  atv: {
    sku: "atv",
    name: "Apple TV",
    price: 109.5,
  },
  vga: {
    sku: "vga",
    name: "VGA adapter",
    price: 30.0,
  },
};
