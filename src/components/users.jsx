import React from 'react';
import { useSelector } from 'react-redux';

function Users() {
  const { users, isLoading, error } = useSelector((state) => state.users)
  console.log(users, isLoading, error);

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error}</div>

  return (
    <ul>{users.map((user) =>{
      return <li key={user.id}>{user.name.first} {user.name.last}</li>
    })}</ul>
  )
}

export default Users;