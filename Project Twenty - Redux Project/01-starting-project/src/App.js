import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';


function App() {

  let authState = useSelector((state)=>state.auth.isAuthenticated)

  return (
    <>
      <Header />
      { !authState && <Auth />}
      { authState && <UserProfile />}
      <Counter />
    </>

  );
}

export default App;
