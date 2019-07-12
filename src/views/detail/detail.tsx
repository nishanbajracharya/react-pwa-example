import React from 'react';

import style from './detail.module.css';
import Appbar from '../../components/appbar';
import userService from '../../services/users';

import * as User from 'UserProps';
import * as Route from 'RouteProps';

interface State {
  class: string;
  user: User.Props;
  id: string | number;
}

class Detail extends React.Component<Route.Props, State> {
  constructor(props: Route.Props) {
    super(props);

    this.state = {
      class: style.root,
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

    this.open();

    document.body.classList.add('fixed');
  }

  open = () => {
    setTimeout(() => {
      this.setState({
        class: [style.root, style.up].join(' '),
      });
    }, 50);
  }

  close = () => {
    this.setState({
      class: style.root,
    });
  }

  render() {
    return <div className={this.state.class}>
      <Appbar userId={this.props.match.params.id} onBack={this.close} history={this.props.history} />
      {this.state.user.firstName} {this.state.user.lastName}
    </div>;
  }
}

export default Detail;
