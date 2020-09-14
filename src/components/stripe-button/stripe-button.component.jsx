import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishKey =
    "pk_test_51HREqVLWFKD1OUqntEDUij6TXRIgQBLBd7OAnxE9o6eyLChxRL6Fkelvf0xfce2xy9VakRNDT6P3Rz3IVeZvwx0l00Bq1SIQpo";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful.");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total amount is $${price}`}
        amount={priceInCents}
        token={onToken}
        stripeKey={publishKey}
      />
    </div>
  );
};

export default StripeButton;
