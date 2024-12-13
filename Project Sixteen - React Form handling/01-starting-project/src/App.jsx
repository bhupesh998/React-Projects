import Header from './components/Header.jsx';
import LoginCopy from './components/LoginCopy.jsx';
import Signup from './components/SignUp.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
      {/* {  <Login />} */}
      { <LoginCopy />}
      </main>
      {/* <Signup/>  */}
    </>
  );
}

export default App;
