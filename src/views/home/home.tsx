import React from 'react';

import style from './home.module.css';
import Appbar from '../../components/appbar';

import * as Route from 'RouteProps';

import userService from '../../services/users';

class Home extends React.Component<Route.Props> {

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
      Home
  </div>;
  }
}

export default Home;
