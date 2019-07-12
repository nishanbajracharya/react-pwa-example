import React from 'react';

import style from './appbar.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/route';

interface IAppbarProps {
  userId: string;
}

function Appbar(props: IAppbarProps) {
  return <div className={style.root}>
    {props.userId && <Link to={ROUTES.ROOT}>Back</Link>}
    Appbar {props.userId}
  </div>;
}

export default Appbar;
