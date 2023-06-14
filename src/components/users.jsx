import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';

function Users() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users)
  console.log(users, isLoading, error);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error}</div>

  return (
    <ul>{users.map((user) =>{
      return <li key={user.id}>{user.name.first} {user.name.last}</li>
    })}</ul>
  )
}

export default Users;