import React from 'react';

import ListItem from '../../components/listItem';
import style from './user-list.module.css';

import * as User from 'UserProps';

interface IUserListProps {
  users: User.IProps[];
}

function UserList(props: IUserListProps) {
  return <div className={style.root}>
    {
      props.users.map((user) => <ListItem key={user.id} user={user} linkTo={`/${user.id}`} linkState={{ user }}/>)
    }
  </div>;
}

export default UserList;
