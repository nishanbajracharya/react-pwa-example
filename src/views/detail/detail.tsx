import React from 'react';

import style from './detail.module.css';
import Appbar from '../../components/appbar';
import userService from '../../services/users';

import * as User from 'UserProps';
import * as Route from 'RouteProps';

interface State {
  user: User.Props;
  id: string | number;
}

class Detail extends React.Component<Route.Props, State> {
  constructor(props: Route.Props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      user: props.location.state ? props.location.state.user : {},
    };
  }

  componentDidMount() {
    if (!this.state.user.id) {
      userService.getUserDetail(this.state.id)
        .then(user => {
          this.setState({
            user
          });
        });
    }
  }

  render() {
    return <div className={style.root}>
      <Appbar userId={this.props.match.params.id} />
      {this.state.user.firstName} {this.state.user.lastName}
    </div>;
  }
}

export default Detail;
