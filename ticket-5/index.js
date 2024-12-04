const shoppingCart = [
  {
    product: "Bananas",
    price: 0.5,
    quantity: 6,
  },
  {
    product: "Apples",

    price: 0.7,
    quantity: 8,
  },
  {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
];

let totalCost = 0;



for (let i = 0; i < shoppingCart.length; i++) {
  console.log(i)
  const item = shoppingCart[i];
  console.log(item)
  const costForItem = item.price * item.quantity;
  totalCost += costForItem;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);

//The total cost for this cart is £23.60
// shoppingCart an array of 3 objects all with product , price and quantitiy properties
// line 23 item now equals the name of each object 
// console.log(shoppingCart[0].price) before i works as expected
//const item = shoppingCart[0]; return The total cost for this cart is £12.00
// fixed totalCostwith totalCost = costForItem; but this only applies for one object
// line 27 was const costForItem = item.price * item.quantity;
// we amended line 24 to < as it had been including the length of the array and therefore an undefined value
