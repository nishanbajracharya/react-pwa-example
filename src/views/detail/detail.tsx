import React from 'react';

import Appbar from '../../components/appbar';
import userService from '../../services/users';
import style from './detail.module.css';

import * as Route from 'RouteProps';
import * as User from 'UserProps';

interface IState {
  class: string;
  user: User.IProps;
  id: string | number;
}

class Detail extends React.Component<Route.IProps, IState> {
  constructor(props: Route.IProps) {
    super(props);

    this.state = {
      class: style.root,
      id: props.match.params.id,
      user: props.location.state ? props.location.state.user : {},
    };
  }

  public componentDidMount() {
    if (!this.state.user.id) {
      userService.getUserDetail(this.state.id)
        .then((user) => {
          this.setState({
            user,
          });
        });
    }

    this.open();

    document.body.classList.add('fixed');
  }

  public open = () => {
    setTimeout(() => {
      this.setState({
        class: [style.root, style.up].join(' '),
      });
    }, 50);
  }

  public close = () => {
    this.setState({
      class: style.root,
    });
  }

  public render() {
    return <div className={this.state.class}>
      <Appbar userId={this.props.match.params.id} onBack={this.close} history={this.props.history} name={{
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
      }} />
    </div>;
  }
}

export default Detail;
