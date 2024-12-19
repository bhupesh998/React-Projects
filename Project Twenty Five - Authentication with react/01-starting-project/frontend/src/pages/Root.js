import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();

  const token = useLoaderData()  // will call token loader on root page and its defined on root only so no need to use userouteloader
  const submit = useSubmit()

  // the flaw in this process is if we reload the page then all components will re render and token expiration timer will start again from 0
  useEffect(()=>{

    if(!token){
      return ;
    }

    if(token === 'EXPIRED'){
      submit(null , { action: '/logout', method: "post"})
      return ;
    }

    const duration = getTokenDuration()
    console.log("token duration", duration);
    

    setTimeout(()=>{
      submit(null , { action: '/logout', method: "POST"})
    }, duration)

  }, [token ,submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
