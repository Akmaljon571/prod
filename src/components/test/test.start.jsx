import { Button } from '@mui/material';
import sertifikat from '../../img/Certificate.png';
import { useContext } from 'react';
import { State } from '../../context';

function TestStart({ setStep }) {
  const { setOpenTest } = useContext(State);

  const cancel = () => {
    setOpenTest(false);
    localStorage.removeItem('test');
  };

  return (
    <div className="start">
      <img width={350} src={sertifikat} alt="" />
      <p>
        Sizga 10 ta savol beriladi va 40 daqiqa vaqt. Shu 40 daqiqa ichida
        savollarni to'g'ri ishlab topshirsangiz sertifikat sizning nomingiz
        uchun rasmiylashtiriladi. Hosh Testni
      </p>
      <Button onClick={cancel} variant="outlined">
        Keyinroq qilamiz{' '}
      </Button>
      <Button onClick={() => setStep('1')} variant="contained">
        Boshlaymiz
      </Button>
    </div>
  );
}

export default TestStart;
