var discount;
var listingprice = 899;
var sellingprice = 199;

discount = (listingprice-sellingprice)/listingprice * 100;

console.log("Discount on the item is " + discount);

displayDiscount = Math.round(discount);
console.log(displayDiscount + " %off");