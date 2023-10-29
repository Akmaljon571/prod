import { useContext } from 'react';
import { State, api } from '../../context';
import { Button } from '@mui/material';
import { testLang } from './test.lang';

function Finish({ finish, setFinish, setStep, setTest }) {
  const { setOpenTest, l, token } = useContext(State);
  const _ = finish?.score >= 8 ? true : false;

  const ok = () => {
    if (_) {
      fetch(api + `/customer/course/${finish.course_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((re) => re.json())
        .then((data) => {
          if (data.ok) {
            window.open(
              api + `/customer/file/${data.course?.take?.certificate_file_id}`,
            );
            localStorage.removeItem('step');
            localStorage.removeItem('result');
            localStorage.removeItem('finish');
            localStorage.removeItem('test');
            setStep('start');
            setTest({});
            setFinish({});
            setOpenTest(false);
          }
        });
    } else {
      localStorage.removeItem('step');
      localStorage.removeItem('result');
      localStorage.removeItem('finish');
      localStorage.removeItem('test');
      setStep('start');
      setTest({});
      setFinish({});
      setOpenTest(false);
    }
  };

  return (
    <div className="finish">
      <p>
        {testLang[l].t5}: {finish.score}
        {testLang[l].t6}
      </p>
      <div className="list">
        <ul>
          {finish
            ? finish?.answers.map((e, i) =>
                i <= 4 ? (
                  <li key={i}>
                    <b>{i + 1}</b>{' '}
                    <span
                      style={
                        e.is_correct
                          ? { backgroundColor: '#0A8E67' }
                          : { backgroundColor: '#FD6259' }
                      }
                    ></span>
                  </li>
                ) : null,
              )
            : null}
          <li></li>
        </ul>
        <ul>
          {finish
            ? finish?.answers.map((e, i) =>
                i > 4 ? (
                  <li key={i}>
                    <b>{i + 1}</b>{' '}
                    <span
                      style={
                        e.is_correct
                          ? { backgroundColor: '#0A8E67' }
                          : { backgroundColor: '#FD6259' }
                      }
                    ></span>
                  </li>
                ) : null,
              )
            : null}
          <li></li>
        </ul>
      </div>
      <Button onClick={ok} variant="contained">
        {_ ? testLang[l].t7 : testLang[l].t8}
      </Button>
    </div>
  );
}

export default Finish;
