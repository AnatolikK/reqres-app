// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Filters from '../components/Filters';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers(page);
        setUsers(data.data);
      } catch (error) {
        setError('Failed to load users');
      }
    };

    loadUsers();
  }, [page]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.first_name.toLowerCase().includes(search.toLowerCase()) ||
                          user.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ||
      (filter === 'even' && user.id % 2 === 0) ||
      (filter === 'odd' && user.id % 2 !== 0);
    return matchesSearch && matchesFilter;
  });

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <Search onSearch={handleSearch} />
      <Filters onFilter={handleFilter} />
      <div className="user-cards">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default Home;
