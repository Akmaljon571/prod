import { useContext } from 'react';
import { State } from '../../context';
import { Button } from '@mui/material';
import { testLang } from './test.lang';

function Finish({ finish, setFinish, setStep, setTest }) {
  const { setOpenTest, l } = useContext(State);

  const ok = () => {
    localStorage.removeItem('step');
    localStorage.removeItem('result');
    localStorage.removeItem('finish');
    localStorage.removeItem('test');
    setStep('start');
    setTest({});
    setFinish({});
    setOpenTest(false);
  };

  return (
    <div className="finish">
      <p>{testLang[l].t5}: {finish.score}{testLang[l].t6}</p>
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
      {testLang[l].t7}
      </Button>
    </div>
  );
}

export default Finish;
