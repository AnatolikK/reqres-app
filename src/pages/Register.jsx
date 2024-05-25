// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/authSlice';
import { setUser } from '../redux/userSlice';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = { email, password };
      const response = await registerUser(userData);
      const token = response.token;

      // Сохраняем данные пользователя в localStorage
      const user = { name, email, avatar };
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch(setToken(token));
      dispatch(setUser(user));

      navigate('/');
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      setError('Ошибка регистрации. Пожалуйста, проверьте ваши данные.');
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ссылка на аватар:</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
