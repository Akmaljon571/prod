import { useContext, useEffect } from 'react';
import { State, api } from '../../context';
import { useNavigate, useParams } from 'react-router-dom';
import './payment.scss';

function Payment() {
  const { token } = useContext(State);
  const { id } = useParams('id');
  const paymentLink = 'https://agr.uz/sandbox';
  const returnURL = `https://product.akmaljondev.uz/courses/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
    if (token && id) {
      fetch(api + `/customer/course/${id}/payment`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(re => re.json())
        .then((data) => {
          if (data.ok) {
            const param = data.params;
            window.location.href = `${paymentLink}?VENDOR_ID=${param.VENDOR_ID}&MERCHANT_TRANS_ID=${param.MERCHANT_TRANS_ID}&MERCHANT_TRANS_AMOUNT=${param.MERCHANT_TRANS_AMOUNT}&MERCHANT_CURRENCY=${param.MERCHANT_CURRENCY}&MERCHANT_TRANS_NOTE=${param.MERCHANT_TRANS_NOTE}&SIGN_TIME=${param.SIGN_TIME}&SIGN_STRING=${param.SIGN_STRING}&MERCHANT_TRANS_RETURN_URL=${returnURL}`;
          }
        })
        .catch(err => console.log(err));
    } else {
      navigate('/login');
    }
  }, [token, navigate, id, returnURL]);

  return (
    <></>
  );
}

export default Payment;
