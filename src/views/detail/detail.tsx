import classnames from 'classnames';
import React from 'react';

import Appbar from '../../components/appbar';
import Avatar from '../../components/avatar';
import userService from '../../services/users';
import { getName } from '../../utils/user';
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
    return <div className={classnames(this.state.class)}>
      <Appbar userId={this.props.match.params.id} onBack={this.close} history={this.props.history} name={{
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
      }} />
      <div className={style['detail-container']}>
        <div className={style.backdrop}>
          <img src={this.state.user.profileImage} alt="" className={style['backdrop-bg']} />
          <Avatar url={this.state.user.profileImage} size={128} withThickBorder={true} withBorder={false} />
          <p className={style.name}>{getName(this.state.user.firstName, this.state.user.lastName)}</p>
        </div>
        <div className={style['detail-list']}>
          <p className={style['detail-title']}>Address</p>
          {this.state.user.address && <div className={style['detail-list-item']}>
            <div className={style.label}>Country</div>
            <div className={style.value}>{this.state.user.address.country}</div>
          </div>}
          {this.state.user.address && <div className={style['detail-list-item']}>
            <div className={style.label}>State</div>
            <div className={style.value}>{this.state.user.address.state}</div>
          </div>}
          {this.state.user.address && <div className={style['detail-list-item']}>
            <div className={style.label}>City</div>
            <div className={style.value}>{this.state.user.address.city}</div>
          </div>}
          {this.state.user.address && <div className={style['detail-list-item']}>
            <div className={style.label}>Street</div>
            <div className={style.value}>{this.state.user.address.streetAddress}</div>
          </div>}
          <p className={style['detail-title']}>Contact</p>
          <div className={style['detail-list-item']}>
            <div className={style.label}>Email</div>
            <div className={style.value}>{this.state.user.email}</div>
          </div>
          <div className={style['detail-list-item']}>
            <div className={style.label}>Phone</div>
            <div className={style.value}>{this.state.user.phone}</div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Detail;
