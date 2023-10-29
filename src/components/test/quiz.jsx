import { Button } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { State, api } from '../../context';
import { testLang } from './test.lang';

function Quiz({ test, setStep, step, data, setFinish }) {
  const [time, setTime] = useState(data.minut);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem('result') || null) || [],
  );
  const { token, l } = useContext(State);
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();

  useEffect(() => {
    setTimeout(() => {
      const minut = time.split(':')[0];
      const sekunt = time.split(':')[1];
      if (sekunt === '00') {
        if (minut === '00') {
          finish();
        } else {
          const resultMinut =
            String(Number(minut) - 1).length === 1
              ? `0${Number(minut) - 1}`
              : Number(minut) - 1;
          setTime(resultMinut + ':59');
          data.minut = resultMinut + ':59';
          localStorage.setItem('test', JSON.stringify(data));
        }
      } else {
        const resultSekunt =
          String(Number(sekunt) - 1).length === 1
            ? `0${Number(sekunt) - 1}`
            : Number(sekunt) - 1;
        setTime(minut + ':' + resultSekunt);
        data.minut = minut + ':' + resultSekunt;
        localStorage.setItem('test', JSON.stringify(data));
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, setStep, data]);

  const finish = () => {
    fetch(
      api + `/customer/course/${test?.course_id}/test/${test?._id}/result`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: result }),
      },
    )
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
          setStep('finish');
          setFinish(data.test_result);
          localStorage.setItem('finish', JSON.stringify(data.test_result));
          data.minut = '40:00';
          localStorage.setItem('test', JSON.stringify(data));
        }
      });
  };

  const next = () => {
    if (step === 10) {
      finish();
    } else {
      localStorage.setItem(
        'result',
        JSON.stringify([
          ...result,
          {
            question_id: test?.questions[Number(step) - 1]?._id,
            variant_id: value,
          },
        ]),
      );
      setResult([
        ...result,
        {
          question_id: test?.questions[Number(step) - 1]?._id,
          variant_id: value,
        },
      ]);
      setStep(Number(step) + 1);
      setValue('');
      inp1.current.checked = false;
      inp2.current.checked = false;
      inp3.current.checked = false;
    }
  };

  return (
    <div className="quiz">
      <div className="slider">
        <div className="slid">
          <span className={Number(step) >= 1 ? 'active' : ''}></span>
          <span className={Number(step) >= 2 ? 'active' : ''}></span>
          <span className={Number(step) >= 3 ? 'active' : ''}></span>
          <span className={Number(step) >= 4 ? 'active' : ''}></span>
          <span className={Number(step) >= 5 ? 'active' : ''}></span>
          <span className={Number(step) >= 6 ? 'active' : ''}></span>
          <span className={Number(step) >= 7 ? 'active' : ''}></span>
          <span className={Number(step) >= 8 ? 'active' : ''}></span>
          <span className={Number(step) >= 9 ? 'active' : ''}></span>
          <span className={Number(step) >= 10 ? 'active' : ''}></span>
        </div>
        <p>{time}</p>
      </div>
      <div className="quiz">
        {test?.questions?.length ? (
          <>
            <p>
              {step}) {test?.questions[Number(step) - 1]?.content}
            </p>
            <ul>
              <li>
                <label>
                  <input
                    ref={inp1}
                    onChange={() =>
                      setValue(
                        test.questions[Number(step) - 1]?.variants[0]?._id,
                      )
                    }
                    type="radio"
                    name="li_radio"
                  />
                  {test.questions[Number(step) - 1]?.variants[0]?.content}
                </label>
              </li>
              <li>
                <label>
                  <input
                    ref={inp2}
                    onChange={() =>
                      setValue(
                        test.questions[Number(step) - 1]?.variants[1]?._id,
                      )
                    }
                    type="radio"
                    name="li_radio"
                  />
                  {test.questions[Number(step) - 1]?.variants[1]?.content}
                </label>
              </li>
              <li>
                <label>
                  <input
                    ref={inp3}
                    onChange={() =>
                      setValue(
                        test.questions[Number(step) - 1]?.variants[2]?._id,
                      )
                    }
                    type="radio"
                    name="li_radio"
                  />
                  {test.questions[Number(step) - 1]?.variants[2]?.content}
                </label>
              </li>
            </ul>
          </>
        ) : null}
      </div>
      {value ? (
        <Button onClick={next} variant="contained">
          {testLang[l].t4}
        </Button>
      ) : null}
    </div>
  );
}

export default Quiz;
