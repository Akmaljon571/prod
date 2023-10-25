import { Button } from '@mui/material';
import download from '../../img/workbook_download.svg';
import { src } from '../../func/src';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { videoLang } from './video.lang';

function Workbook({ course, take }) {
  const { token, l } = useContext(State);
  const [workbook, setWorkbook] = useState({});

  useEffect(() => {
    if (course?._id && token) {
      fetch(api + `/customer/course/${course?._id}/workbook`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((re) => re.json())
        .then((data) => setWorkbook(data?.workbooks));
    }
  }, [course, token]);

  return (
    <div className="video_workbook">
      <h3>{videoLang[l].work}</h3>
      <p>{videoLang[l].wtext}</p>
      <a
        href={workbook?.length && take ? src(token, workbook[0].file_id) : ''}
        target="_blank"
        rel="noreferrer"
        className="btns"
      >
        <Button
          style={!take ? { backgroundColor: 'gray', cursor: 'no-drop' } : {}}
          variant="contained"
        >
          Yuklab olish
        </Button>
        <img src={download} alt="Download" />
      </a>
    </div>
  );
}

export default Workbook;
