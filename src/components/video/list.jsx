import play from '../../img/video-player.svg';
import lock from '../../img/lock.svg';
import PauseIcon from '@mui/icons-material/Pause';
import { message } from 'antd';
import { State, api } from '../../context';
import { useContext } from 'react';

function List({ videos, active, find, setFindVideo, course }) {
  const { token } = useContext(State);

  const findVideo = (id) => {
    message.loading("So'rov jo'natildi");
    fetch(api + `/admin/course/${course}/video/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
          setFindVideo(data.video);
        }
      });
  };
  return (
    <div className="video_list">
      <div className="video_list-top">
        <p>Barcha video darsliklar</p>
        <span>{videos?.length} ta</span>
      </div>
      <ul className="list">
        {videos?.length
          ? videos.map((e, i) => (
              <li key={e._id}>
                <div className="item-left">
                  {active || i < 2 ? (
                    find === e._id ? (
                      <div className="pause">
                        <PauseIcon />
                      </div>
                    ) : (
                      <img
                        onClick={() => findVideo(e._id)}
                        className="play"
                        src={play}
                        alt="Video play"
                      />
                    )
                  ) : (
                    <div
                      onClick={() => message.error('Sotib olinmagan')}
                      className="lock"
                    >
                      <img src={lock} alt="Video block" />
                    </div>
                  )}
                  <h4>{e.title}</h4>
                </div>
                <div className="item-right">
                  <span></span>
                  <p>{e.sequence} Dars</p>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default List;
