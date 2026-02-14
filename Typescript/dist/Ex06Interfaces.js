"use strict";
class PayPalProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} via Paypal`);
    }
    refund(amount) {
        console.log(`Refunding payment of $${amount} via Paypal`);
    }
}
class PhonePeProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} via PhonePe`);
    }
    refund(amount) {
        console.log(`Refunding payment of $${amount} via PhonePe`);
    }
}
function getPaymentProcessor(mode) {
    if (mode == "Paypal")
        return new PayPalProcessor();
    else if (mode == "PhonePe")
        return new PhonePeProcessor();
    else
        throw new Error("Invalid mode of payment");
}
console.log("Enter the mode of Payment: Paypal or PhonePe");
const mode = "Paypal";
let payment = getPaymentProcessor(mode); //RTP
payment.processPayment(5000);
payment.processPayment(500);
payment.refund(300);
