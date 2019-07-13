import React from 'react';

import Appbar from '../../components/appbar';
import userService from '../../services/users';
import style from './home.module.css';
import UserList from './userList';

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
        this.state.users && this.state.users.length > 0 && <UserList users={this.state.users} />
      }
    </div>;
  }
}

export default Home;
