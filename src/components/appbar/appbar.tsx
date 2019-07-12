import React from 'react';

import style from './appbar.module.css';

interface IAppbarProps {
  userId: string;
}

function Appbar(props: IAppbarProps) {
  return <div className={style.root}>Appbar {props.userId}</div>;
}

export default Appbar;
