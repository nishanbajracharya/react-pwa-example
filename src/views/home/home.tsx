import React from 'react';

import Appbar from '../../components/appbar';
import userService from '../../services/users';
import style from './home.module.css';
import UserList from './userList';

import * as Route from 'RouteProps';
import * as User from 'UserProps';

interface IState {
  users: User.IProps[];
  offline: boolean;
}

class Home extends React.Component<Route.IProps, IState> {

  constructor(props: Route.IProps) {
    super(props);

    this.state = {
      offline: !window.navigator.onLine,
      users: [],
    };
  }

  public componentDidMount() {
    userService.getUsers().then((users) => {
      this.setState({
        users,
      });
    });

    window.addEventListener('online', this.setOfflineStatus);
    window.addEventListener('offline', this.setOfflineStatus);
  }

  public componentWillUnmount() {
    window.removeEventListener('online', this.setOfflineStatus);
    window.removeEventListener('offline', this.setOfflineStatus);
  }

  public setOfflineStatus = () => {
    this.setState({
      offline: !window.navigator.onLine,
    });
  }

  public render() {
    return <div className={style.root}>
      <Appbar userId={this.props.match.params.id} offline={this.state.offline} />
      {
        this.state.users && this.state.users.length > 0 && <UserList users={this.state.users} />
      }
    </div>;
  }
}

export default Home;
