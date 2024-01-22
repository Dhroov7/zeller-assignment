export interface IPricingRules {
    BULK_DISCOUNT?: Record<string, IBulkDiscount>;
    BUYA_PAYB?: Record<string, IBuyAPayB>
}

interface IBulkDiscount {
    threshold: number;
    discountedPrice: number;
}

interface IBuyAPayB {
    pay: number;
    buy: number
}

export interface IProduct {
    sku: string;
    name: string;
    price: number;
}

export type Cart = Record<string, number>;