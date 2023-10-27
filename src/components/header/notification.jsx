import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { State, api } from '../../context';
import 'react-toastify/dist/ReactToastify.css';

function Notification({ setActive }) {
  const localNotification = JSON.parse(
    localStorage.getItem('notification') || null,
  );
  const { token } = useContext(State);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (token) {
      const intervalId = setInterval(() => {
        fetch(api + '/customer/news', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const news = data.news;
            if (news.length > 0) {
              const latestNews = news.reverse()[0];

              if (!localNotification) {
                localStorage.setItem(
                  'notification',
                  JSON.stringify(new Date()),
                );
              } else if (latestNews.created_at > localNotification) {
                toast(<h4>{latestNews.title}</h4>);
                setActive(true);

                localStorage.setItem(
                  'notificationActive',
                  JSON.stringify(true),
                );
                localStorage.setItem(
                  'notification',
                  JSON.stringify(latestNews.created_at),
                );
              }
            }

            setCount(count + 1);
          })
          .catch((error) => {
            console.error('Error fetching news:', error);
          });
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [localNotification, token, setActive, count]);

  return (
    <div className="notification">
      <ToastContainer />
    </div>
  );
}

export default Notification;
