import { Button } from '@mui/material';
import download from '../../img/workbook_download.svg';
import { src } from '../../func/src';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';

function Workbook({ course }) {
  const { token } = useContext(State);
  const [workbook, setWorkbook] = useState({});

  useEffect(() => {
    if (course?._id) {
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
      <h3>Workbook</h3>
      <p>Workbook mashqlar bajarish uchun yuklab oling</p>
      <a
        href={workbook?.length ? src(token, workbook[0].file_id) : ''}
        target="_blank"
        rel="noreferrer"
        className="btns"
      >
        <Button variant="contained">Yuklab olish</Button>
        <img src={download} alt="Download" />
      </a>
    </div>
  );
}

export default Workbook;
