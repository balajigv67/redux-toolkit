import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>This is Home Page</h1>
      <h3>{username}</h3>
    </div>
  );
};

export default Home;
