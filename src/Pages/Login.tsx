import { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';
//"useDispatch" is used for 'modifing state' and "useSelector" is used for 'getting state'
const Login = () => {
  const [newUsername, setNewusername] = useState('');

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <>
      <h1>{username}</h1>
      <input
        onChange={(e) => {
          setNewusername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};

export default Login;
