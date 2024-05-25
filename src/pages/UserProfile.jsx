// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUser } from '../api';
import '../style/profile.css';

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUser(id);
        setUser(data.data);
      } catch (error) {
        setError('Не удалось загрузить данные пользователя');
      }
    };

    loadUser();
  }, [id]);

  useEffect(() => {
    if (user) {
      document.getElementById('user-avatar').src = user.avatar || 'https://vk.com/images/camera_200.png';
      document.getElementById('user-name').innerHTML = `${user.first_name} ${user.last_name}`;
      document.getElementById('user-email').innerHTML = user.email;
    }
  }, [user]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="profile-container">
      <h2>Профиль пользователя</h2>
      <div className="profile-info">
        <img id="user-avatar" alt="User Avatar" className="profile-avatar" src={user.avatar || 'https://vk.com/images/camera_200.png'} />
        <p><strong>Имя:</strong> <span id="user-name">{`${user.first_name} ${user.last_name}`}</span></p>
        <p><strong>Email:</strong> <span id="user-email">{user.email}</span></p>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default UserProfile;
