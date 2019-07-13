import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../avatar';
import style from './list-item.module.css';

import * as User from 'UserProps';

interface IListItemProps {
  user: User.IProps;
  linkTo: string;
  linkState: {};
}

function ListItem(props: IListItemProps) {
  return <div className={style.root}>
    <Link
      className={style.link}
      to={{
        pathname: props.linkTo,
        state: props.linkState,
      }}>
        <div className={style.item}>
          <Avatar url={props.user.profileImage}/>
        </div>
      </Link>
  </div>;
}

export default ListItem;
