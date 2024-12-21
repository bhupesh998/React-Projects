import { useIsFetching } from '@tanstack/react-query'
// to find if react query is fetching any data 
export default function Header({ children }) {

  const fetching = useIsFetching() // will be 0, if not fetching and will be higher nummber if fetching any data 
  return (
    <>
      <div id="main-header-loading"></div>
      { fetching> 0 &&  <progress /> }
     
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
