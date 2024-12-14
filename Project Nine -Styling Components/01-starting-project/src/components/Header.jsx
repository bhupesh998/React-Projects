import logo from '../assets/logo.png';
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className='flex flex-col item-center mt-8 mb-16'>
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain'/>
      <h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-blue-800 font-myTitle'>ReactArt</h1>
  { /* Regular curly brackets syntax and we are passing object in it for styling */}
      <p 
      // style={{
      //   color: 'yellow',
      //   background: 'black',
      //   textAlign: 'left'
      //   }}

     // className={classes.paragraph}
     className="text-stone-500"
      
      >A community of artists and art-lovers.</p>
    </header>
  );
}
