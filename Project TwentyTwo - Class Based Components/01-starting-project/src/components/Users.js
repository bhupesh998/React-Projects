import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';






// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {

  constructor(){
    // with class based components your state is always an object whereas in function comp. it can be anything
    // also the state name has to be state and no other name allowed
   super()
    this.state = {
      showUsers: true
    }
  }

  toggleUsersHandler(){
   // this.state.showUsers = false  - not the way to do 
   // this.setState also takes an object , this object will have the new state but it will not overrider the new state instead react will merge the old and new objects
   // whereas in functional components your state gets overridden 
   this.setState((prev)=> {
    return {
      showUsers : !prev.showUsers
    }
   })
  }

  render() {

    const usersList = (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        );

    return (
      <div className={classes.users}>
        { /* using bind while calling the method so that this keyword in method refers to surrounding class*/}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

}

export default Users;
