import React from 'react';
import { Link } from 'react-router-dom';

import Appbar from '../../components/appbar';
import userService from '../../services/users';
import style from './home.module.css';

import * as Route from 'RouteProps';
import * as User from 'UserProps';

interface IState {
  users: User.IProps[];
}

class Home extends React.Component<Route.IProps, IState> {

  constructor(props: Route.IProps) {
    super(props);

    this.state = {
      users: [],
    };
  }

  public componentDidMount() {
    userService.getUsers().then((users) => {
      this.setState({
        users,
      });
    });
  }

  public render() {
    return <div className={style.root}>
      <Appbar userId={this.props.match.params.id} />
      {
        this.state.users && this.state.users.length > 0 && <ul>
          {
            this.state.users.map((user) => <li key={user.id}>
              <Link to={{
                pathname: `/${user.id}`,
                state: { user },
              }}>{user.firstName} {user.lastName}</Link>
            </li>)
          }
        </ul>
      }
    </div>;
  }
}

export default Home;
