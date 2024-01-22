# Checkout System

This project implements a simple checkout system with pricing rules for bulk discount and buy A pay B offers.

## Getting Started

To use the checkout system, follow the steps below:

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhroov7/zeller-assignment.git
   cd zeller-assignment
   ```
2. Setup Project:
   ```bash
   npm install
   tsc
   npm start
   ```
3. Usage
   ```
   const { Checkout } = require("./checkout");
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
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    console.log(co.total());
   ```

```
NOTE: This project has constant.ts file which contains the products as a constant in memory.
```
