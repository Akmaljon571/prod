import { useContext, useEffect } from 'react';
import { State, api } from '../../context';
import { useNavigate } from 'react-router-dom';
import './payment.scss';

function Payment() {
  const { token } = useContext(State);
  // const paymentLink = 'https://agr.uz/sandbox';
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetch(api + '/customer/payment');
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <iframe
      className="payment"
      src="https://agr.uz/sandbox?VENDOR_ID=101613&MERCHANT_TRANS_ID=654e9c2d7d2ab573e15c7492&MERCHANT_TRANS_AMOUNT=1001&MERCHANT_CURRENCY=sum&MERCHANT_TRANS_NOTE=NOTE&SIGN_TIME=1699650605221&SIGN_STRING=5f4eb0d79dfaa48b7dd247020ac2032f&MERCHANT_TRANS_RETURN_URL=https%3A%2F%2Fapi.lincor.uz%2Fcustomer%2Fcourse%2F653df15af0f1a1215853baea%2Fpayment%2F654e9c2d7d2ab573e15c7492"
      title="payment"
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
}

export default Payment;
