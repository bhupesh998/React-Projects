import logo from '../assets/logo.png';
import classes from './Header.module.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
  { /* Regular curly brackets syntax and we are passing object in it for styling */}
      <p 
      // style={{
      //   color: 'yellow',
      //   background: 'black',
      //   textAlign: 'left'
      //   }}

      className={classes.paragraph}
      
      >A community of artists and art-lovers.</p>
    </header>
  );
}
