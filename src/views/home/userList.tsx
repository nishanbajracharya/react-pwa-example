import React from 'react';

import {
  AutoSizer,
  List,
} from 'react-virtualized';

import ListItem from '../../components/listItem';
import style from './user-list.module.css';

import * as User from 'UserProps';

interface IUserListProps {
  users: User.IProps[];
}

function UserList(props: IUserListProps) {
  return <div className={style.root}>
    <AutoSizer>
      {({ width, height }) =>
        <main>
          <List
            rowCount={props.users.length}
            width={width}
            height={height}
            rowHeight={56}
            rowRenderer={({ index, key, style: rowStyle }) =>
              <ListItem
                key={key}
                style={rowStyle}
                user={props.users[index]}
                linkTo={`/${props.users[index].id}`}
                linkState={{ user: props.users[index] }} />}
          />
        </main>
      }
    </AutoSizer>
  </div>;
}

export default UserList;
