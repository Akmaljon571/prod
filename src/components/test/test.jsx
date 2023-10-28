import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import TestStart from './test.start';
import Quiz from './quiz';
import Finish from './test.finish';
import './test.scss';

function Test() {
  const data = JSON.parse(localStorage.getItem('test') || null);
  const { token, openTest } = useContext(State);
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem('step')) || 'start',
  );
  const [test, setTest] = useState({});
  const [finish, setFinish] = useState(
    JSON.parse(localStorage.getItem('finish') || null) || {},
  );

  useEffect(() => {
    if (step) {
      localStorage.setItem('step', JSON.stringify(step));
    }
  }, [step]);

  useEffect(() => {
    if (data?.course_id && token && !test?._id) {
      fetch(api + `/customer/course/${data?.course_id}/test/${data?.test_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((re) => re.json())
        .then((db) => {
          if (db.ok) {
            setTest(db.test);
          }
        });
    }
  }, [data, token, test]);

  return (
    <div className="test">
      {openTest ? (
        <>
          <span className="fixed"></span>
          <div className="modal">
            <h2>{test?.title}</h2>
            {step === 'start' ? (
              <TestStart setStep={setStep} test={test} />
            ) : null}
            {Number(step) ? (
              <Quiz
                setFinish={setFinish}
                setStep={setStep}
                test={test}
                step={step}
                data={data}
              />
            ) : null}
            {step === 'finish' ? (
              <Finish
                setStep={setStep}
                setTest={setTest}
                setFinish={setFinish}
                finish={finish}
              />
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Test;
