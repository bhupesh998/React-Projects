import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../store/index';

const Header = () => {

  let authState = useSelector((state)=>state.auth.isAuthenticated)

  const dispatch = useDispatch()

  function handleLogout(event){
    event.preventDefault()
    dispatch(authAction.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     { authState && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
     }
    </header>
  );
};

export default Header;
