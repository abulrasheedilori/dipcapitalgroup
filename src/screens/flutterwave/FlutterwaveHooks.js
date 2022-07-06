import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

export default function FlutterwaveHooks() {
  const navigate = useNavigate()
  const config = {
    public_key: process.env.REACT_APP_TOKEN_KEY,
    tx_ref: Date.now(),
    amount: 25,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "abdulrasheedilori@gmail.com",
      phonenumber: "08058867077",
      name: "Abdulrasheed Ilori",
    },
    customizations: {
      title: "Brainstem Technologies",
      description: "Subscription as a writer",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              //more robust detailed page can be implemented here
              //for these assessment sake, I will keep the scope little
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {navigate('/')},
          });
        }}
        className="footer__btn--black"
      >
        JOIN US
      </button>
    </div>
  );
}
