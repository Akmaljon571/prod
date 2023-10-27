import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { src } from '../../func/src';
import './news.scss';
import { message } from 'antd';

function News() {
  const [news, setNews] = useState([]);
  const { token, setActive, active } = useContext(State);
  const [newsOne, setNewsOne] = useState({});

  useEffect(() => {
    if (active) {
      localStorage.removeItem('notificationActive');
      setActive(false);
    }
    fetch(api + '/customer/news', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        setNews(data.news);
        if (data.news?.length) {
          const one = data.news.reverse()[0]?._id;
          fetch(api + `/customer/news/${one}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((re) => re.json())
            .then((find) => {
              setNewsOne(find.news);
            });
        }
      });
  }, [token, setActive, active]);

  const one = (id) => {
    message.loading('Loading...');
    fetch(api + `/customer/news/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((find) => {
        message.destroy();
        setNewsOne(find.news);
      });
  };

  return (
    <div className="news">
      <div className="left">
        {newsOne.image ? <img src={src(token, newsOne?.image)} alt="" /> : null}
        <div>
          <h3>{newsOne.title}</h3>
          <p>{newsOne.description}</p>
          <span>{new Date(newsOne.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <ul className="list">
        {news?.length
          ? news.map((e) => (
              <li onClick={() => one(e._id)} key={e._id}>
                <p>{e.title}</p>{' '}
                <span>{new Date(newsOne.created_at).toLocaleDateString()}</span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default News;
