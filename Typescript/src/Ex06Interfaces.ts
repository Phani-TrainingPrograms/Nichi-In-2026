//interfaces are like abstract classes with no implemention in them. All methods of interfaces are abstract methods only. 
interface PaymentProcessor{
    processPayment(amount: number) : void;
    refund(amount: number) : void;
}

class PayPalProcessor  implements PaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} via Paypal`);
    }
    refund(amount: number): void {
        console.log(`Refunding payment of $${amount} via Paypal`);
    }
}

class PhonePeProcessor  implements PaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} via PhonePe`);
    }
    refund(amount: number): void {
        console.log(`Refunding payment of $${amount} via PhonePe`);
    }
}

function getPaymentProcessor(mode : string) : PaymentProcessor{
    if(mode == "Paypal")
        return new PayPalProcessor();
    else if(mode == "PhonePe")
        return new PhonePeProcessor();
    else 
        throw new Error("Invalid mode of payment");
}

console.log("Enter the mode of Payment: Paypal or PhonePe")
const mode : string = "Paypal";
let payment : PaymentProcessor = getPaymentProcessor(mode)//RTP
payment.processPayment(5000)
payment.processPayment(500);
payment.refund(300)

//In TS, interfaces can also represent models(Data).
interface Product{
    id : number;
    name : string;
    cost : string
    quantity : number 
}

