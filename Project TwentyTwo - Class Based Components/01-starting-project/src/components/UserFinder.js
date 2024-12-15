import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from '../store/context';
import ErrorBoundary from './ErrorBoundary';


// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

class UserFinder extends Component {

    // with useContext hook you can listen to multiple context by calling useContext multiple times
    // whereas in class based components you can only connect the component to one context
    static contextType = UserContext

    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
        // you can send http request , like here when our componets renders users are empty and we can set here assuming data is coming from servers
        // it will only run once 
        this.setState({ filteredUsers: this.context.users })
    }


    componentDidUpdate(prevProps, prevState) {

        if (prevState.searchTerm !== this.state.searchTerm) {
            // below code will cause an infinte loop because we are setting state that will cause component to rerender and on rerender this will be executed again and again
            // to avoid this we are checking old search term and new serach term are not equal
            // In useEffect we can specify the dependcy and only on its change that exeutes but here we need to implement checks
            this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) })
        }

    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value })
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary >
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>

        );
    }
}

export default UserFinder;