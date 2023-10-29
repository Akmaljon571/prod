import { Button } from '@mui/material';
import sertifikat from '../../img/Certificate.png';
import { useContext } from 'react';
import { State } from '../../context';
import { testLang } from './test.lang';

function TestStart({ setStep }) {
  const { setOpenTest, l } = useContext(State);

  const cancel = () => {
    setOpenTest(false);
    localStorage.removeItem('test');
  };

  return (
    <div className="start">
      <img width={350} src={sertifikat} alt="" />
      <p>{testLang[l].t1}</p>
      <Button onClick={cancel} variant="outlined">
        {testLang[l].t2}
      </Button>
      <Button onClick={() => setStep('1')} variant="contained">
        {testLang[l].t3}
      </Button>
    </div>
  );
}

export default TestStart;
