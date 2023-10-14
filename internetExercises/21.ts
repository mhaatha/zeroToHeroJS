class Goods {
  itemName: string;
  price: number;

  constructor(itemName: string, price: number) {
    this.itemName = itemName;
    this.price = price;
  }

  calculateDiscountedPrice(discountValue: number): void {
    // discountValue in % (10%)
    const discountValueInPrice: number = this.price * (discountValue / 100);
    const totalDiscount: number = this.price - discountValueInPrice;
    console.log(
      `The discount for the ${this.itemName} is ${discountValue} percent and the final price is ${totalDiscount}`
    );
  }
}

const goods1 = new Goods("Sweater Ultraman", 150000);
console.log(goods1);
goods1.calculateDiscountedPrice(10);

const goods2 = new Goods("Sneaker Nike", 375000);
console.log(goods2);
goods2.calculateDiscountedPrice(15);
