import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.avatar || 'https://vk.com/images/camera_200.png'} alt={`${user.first_name} ${user.last_name}`} />
    <h2>{user.first_name} {user.last_name}</h2>
    <p>{user.email}</p>
    <Link to={`/user/${user.id}`}>Посмотреть профиль</Link>
  </div>
);

export default UserCard;
