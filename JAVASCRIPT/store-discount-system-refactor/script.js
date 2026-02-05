console.log("Store Discount System using functions\n\n");



function getDiscount(customer_type, purchase_amount) {

    if (customer_type !== "member" && customer_type !== "non-member") {
        console.log("\nInvalid customer type.");
        customer_type = "non-member";
        
    }


    if (customer_type === "member" && purchase_amount >= 1000) {
        return 0.20; 
    
    }
    else if (customer_type === "member" && (purchase_amount >= 500 && purchase_amount < 1000)) {
        return 0.10;
    }
    else if (customer_type === "member" && (purchase_amount < 500 && purchase_amount > 0)) {
        return 0.05;
    }
    else if (customer_type === "non-member" && purchase_amount >= 1000) {
        return 0.10;
    }
    else if (customer_type === "non-member" && (purchase_amount >= 500 && purchase_amount < 1000)) {
        return 0.05;
    }
    else {
        return 0;
    }
}


function calculateFinalPrice(purchase_amount, discountRate) {
    if (purchase_amount < 0) {
        console.log("\nInvalid purchase amount.");
        purchase_amount = 0; 
    }
    let discountPercent = 100 * discountRate;
    let discountAmount = purchase_amount * discountRate;
    let finalPrice = purchase_amount - discountAmount;

    return {
        purchase_amount,
        finalPrice,
        discountAmount,
        discountPercent,
    };
}


const customers = [
    { name: "Alice", customer_type: "member", purchase_amount: 100 },
    { name: "Brian", customer_type: "member", purchase_amount: 800 },
    { name: "Chloe", customer_type: "non-member", purchase_amount: 1200 },
];


for (let i = 0; i < customers.length; i++) {
    let discountRate = getDiscount(customers[i].customer_type, customers[i].purchase_amount);
    let finalPriceDetails = calculateFinalPrice(customers[i].purchase_amount, discountRate);
    let currentType = customers[i].customer_type === "member" || customers[i].customer_type === "non-member" ? customers[i].customer_type : "non-member";

    console.log(customers[i].name + " (" + currentType + ") - Original: $" 
        + finalPriceDetails.purchase_amount + "-> Discount: " + finalPriceDetails.discountPercent + "% " 
        + "($" + finalPriceDetails.discountAmount + ") -> Final: $" + finalPriceDetails.finalPrice);
}
