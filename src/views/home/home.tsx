import React from 'react';
import { Link } from 'react-router-dom';

import style from './home.module.css';
import Appbar from '../../components/appbar';

import * as User from 'UserProps';
import * as Route from 'RouteProps';

import userService from '../../services/users';

interface State {
  users: Array<User.Props>;
}

class Home extends React.Component<Route.Props, State> {

  constructor(props: Route.Props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    userService.getUsers().then(users => {
      this.setState({
        users
      });
    });
  }

  render() {
    return <div className={style.root}>
      <Appbar userId={this.props.match.params.id} />
      {
        this.state.users && this.state.users.length > 0 && <ul>
          {
            this.state.users.map(user => <li key={user.id}>
              <Link to={{
                pathname: `/${user.id}`,
                state: { user }
              }}>{user.firstName} {user.lastName}</Link>
            </li>)
          }
        </ul>
      }
    </div>;
  }
}

export default Home;
