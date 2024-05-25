import React, { useEffect, useState } from 'react';
import '../style/profile.css';

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      setError('Данные пользователя не найдены');
    }
  }, []);

  return (
    <div className="profile-container">
      <h2>Мой профиль</h2>
      {user && (
        <div className="profile-info">
          <p><strong>Имя:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Аватар:</strong> <img src={user.avatar} alt="Avatar" className="profile-avatar" /></p>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
