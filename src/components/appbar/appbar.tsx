import React from 'react';
import { History } from 'history'

import style from './appbar.module.css';
import ROUTES from '../../constants/route';

interface IAppbarProps {
  userId: string;
  onBack?: Function;
  history?: History;
}

function Appbar(props: IAppbarProps) {
  function navigate() {
    props.onBack && props.onBack();
    document.body.classList.remove('fixed');

    setTimeout(() => {
      props.history && props.history.push(ROUTES.ROOT);
    }, 500);
  }

  return <div className={style.root}>
    {props.userId && <div className={style.back} onClick={navigate}>
      <i className="material-icons">
        arrow_back
      </i>
    </div>}
    <p className={style.title}>Appbar</p>
  </div>;
}

export default Appbar;
