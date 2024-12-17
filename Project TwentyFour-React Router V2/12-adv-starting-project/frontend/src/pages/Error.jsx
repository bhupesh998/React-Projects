import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Error = () => {

  const error = useRouteError();
  // this error object will depend on the error thrown from the loader , if response is throwm the it will have status propertu otherwise if any object thrown it would simply be that object

  let title = "An Error Occured"
  let message = "Something went Wrong"

  if(error.status == 500){
   message = JSON.parse(error.data).message
  }


  if(error.status == 404){
    title="Not Found"
    message="Resource Could Not be Found"
  }

  return (
    <>
    <MainNavigation />
    <PageContent title={title} >
      <p>{message}</p>
    </PageContent>
    </>
  )
}

export default Error
