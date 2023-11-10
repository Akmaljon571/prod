import { useContext, useEffect } from 'react';
import { State, api } from '../../context';
import { useNavigate } from 'react-router-dom';
import './payment.scss';

function Payment() {
  const paymentLink = 'https://agr.uz/sandbox';
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetch(api + '/customer/payment');
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="payment">
      <iframe src={paymentLink} title="a" frameborder="0"></iframe>
    </div>
  );
}

export default Payment;
