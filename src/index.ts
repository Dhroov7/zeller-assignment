import { Checkout } from "./checkout";

const co = new Checkout({
  BULK_DISCOUNT: {
    ipd: {
      discountedPrice: 499.0,
      threshold: 2,
    },
  },
  BUYA_PAYB: {
    atv: {
      pay: 2,
      buy: 3,
    },
  },
});

//Scenario One: Apply Bulk Discount Offer
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");
co.scan("atv");
console.log(co.total());

//Scenario Two: Apply Buy 3 Pay 2 Discount Offer
co.scan("atv");
co.scan("atv");
co.scan("ipd");
co.scan("atv");
console.log(co.total());
