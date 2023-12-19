import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import "./Payment.css";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(totalPrice.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Payment Gateway || Bistro Boss</title>
      </Helmet>
      <SectionTitle
        heading="PAYMENT"
        subHeading="---Please process---"
      ></SectionTitle>
      <div className="px-20">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
