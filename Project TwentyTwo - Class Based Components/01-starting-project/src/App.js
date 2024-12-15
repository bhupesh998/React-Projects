import UserFinder from './components/UserFinder';
import UserContext from './store/context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {

  const userContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      <UserContext.Provider value={userContext}>
      <UserFinder />
      </UserContext.Provider>
    </div>
  );
}

export default App;
