console.log("Store Discount System\n\n");

let customer_type = "member";
let purchase_amount = 250;
let discount = 0;

if (customer_type === "member" && purchase_amount >= 1000) {
    discount = 0.20; 
}
else if (customer_type === "member" && (purchase_amount >= 500 && purchase_amount < 1000)) {
    discount = 0.10;
}
else if (customer_type === "member" && (purchase_amount < 500 && purchase_amount > 0)) {
    discount = 0.05;
}
else if (customer_type === "non-member" && purchase_amount >= 1000) {
    discount = 0.10; 
}
else if (customer_type === "non-member" && (purchase_amount >= 500 && purchase_amount < 1000)) {
    discount = 0.05;
}
else if  (purchase_amount < 0) {
    console.log("Invalid purchase amount.");
    purchase_amount = 0;
}
else {
    discount = 0;
}

let discount_applied = 100 * discount;
let final_price = purchase_amount - (purchase_amount * discount);

console.log("Customer Type: " + customer_type);
console.log("Purchase Amount: $" + purchase_amount);
console.log("Discount Applied: " + discount_applied + "%");
console.log("Final Price after Discount: $" + final_price);