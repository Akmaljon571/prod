import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { useNavigate, useParams } from 'react-router-dom';
import './payment.scss';

function Payment() {
  const paymentLink = 'https://agr.uz/sandbox';
  const returnURL = 'http://localhost:3000/buy';
  const [param, setParam] = useState({});
  const { token } = useContext(State);
  const { id } = useParams('id');
  const navigate = useNavigate();

  useEffect(() => {
    if (token && id) {
      fetch(api + `/customer/course/${id}/payment`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(re => re.json())
        .then(data => setParam(data.params))
        .catch(err => console.log(err));
    } else {
      navigate('/login');
    }
  }, [token, navigate, id]);

  return (
    <>
      {param?.VENDOR_ID ? <iframe
        className="payment"
        src={`${paymentLink}?VENDOR_ID=${param.VENDOR_ID}&MERCHANT_TRANS_ID=${param.MERCHANT_TRANS_ID}&MERCHANT_TRANS_AMOUNT=${param.MERCHANT_TRANS_AMOUNT}&MERCHANT_CURRENCY=${param.MERCHANT_CURRENCY}&MERCHANT_TRANS_NOTE=${param.MERCHANT_TRANS_NOTE}&SIGN_TIME=${param.SIGN_TIME}&SIGN_STRING=${param.SIGN_STRING}&MERCHANT_TRANS_RETURN_URL=${returnURL}`}
        title="payment"
        frameBorder="0"
        allowFullScreen
      ></iframe> : null}
    </>
  );
}

export default Payment;
