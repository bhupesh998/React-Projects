
import { useFetcher } from 'react-router-dom';
// useFetcher is to be used when you want to trigger a loader or action without actually loading the page route to which the action belongs
// its perfect for scenarios like where we have a shared component or we have component thats used multiple times on same page or you wanna update or get some data behind the scenes
import classes from './NewsLetterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {

      // this hook when execute gives us an object, this object includes a bunch of properties and method
      // for e.g. it gives us a Form component diffrent from other <Form> component given by react router dom
      // it also gives us a submit function diffrent from submit that we have used
    const fetcher = useFetcher()
    const { data, state } = fetcher

    // this state from fetcher tells wheather the fetcher behind the scenes completed the loader or action that was triggered
    // state === 'loading'

    useEffect(()=>{
        if(state === 'idle' && data && data.message){
            window.alert(data.message)
        }
    }, [data, state])
  

// the newsLetterSignup component is included on all pages if we news letter action on this component then executing this action was straigt forward 
// but newsLetterSignup component is added on all componets so therefore we need to add the action to all routes that would be code duplication and action if we use it on other routes 
// then it will interfere with other action defined

  return (
    // this fetcher.Form this will still trigger an action but it will not initialize a route transition
    // fetcher should basically be used when you wanna trigger an action , also a loader with help of a load function without actually navigating to which the loader belongs or to the page which action belongs 

    // i want to trigger the action at /newsletter route and it will not load that routes component, but if we would have use <Form> than we would do that 
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>

      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;