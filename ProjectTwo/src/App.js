import React from 'react'
import { Routes , Route, Link , useParams} from 'react-router-dom'

const HomeComponent = ()=>{
  return <>I am Home Component</>
}

const ProfileComponent = ()=>{
  const {userName} = useParams()
  return <>I am your fan : {userName}</>
}

export default function App() {
  return <>
    <Link to="/">Home</Link><br></br>
    <Link to="/about">About</Link><br></br>
    <Link to="/careers">Careers</Link> <br></br>
    <Link to="/profile/NAMi">Visit Profile</Link> <br></br>
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/about' element={<>I am About</>}/>
      <Route path='/profile/:userName' element={<ProfileComponent/>}/>
      <Route path='/careers' element={<>I am Careers</>}/>
    </Routes>
  
  </>
}
