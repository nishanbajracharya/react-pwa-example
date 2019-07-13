import React from 'react';
import { Link } from 'react-router-dom';

import { getName } from '../../utils/user';
import Avatar from '../avatar';
import style from './list-item.module.css';

import * as User from 'UserProps';

interface IListItemProps {
  user: User.IProps;
  linkTo: string;
  linkState: {};
  style: {};
}

function ListItem(props: IListItemProps) {
  return <div className={style.root} style={props.style}>
    <Link
      className={style.link}
      to={{
        pathname: props.linkTo,
        state: props.linkState,
      }}>
        <div className={style.item}>
          <Avatar url={props.user.profileImage}/>
          <p className={style.name}>{getName(props.user.firstName, props.user.lastName)}</p>
        </div>
      </Link>
  </div>;
}

export default ListItem;
