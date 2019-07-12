import { History } from 'history';
import React from 'react';

import ROUTES from '../../constants/route';
import style from './appbar.module.css';

import { getName } from '../../utils/user';

interface IName {
  firstName?: string;
  lastName?: string;
}

interface IAppbarProps {
  userId: string;
  onBack?: () => void;
  history?: History;
  name?: IName;
}

function Appbar(props: IAppbarProps) {
  function navigate() {
    if (props.onBack) {
      props.onBack();
    }

    document.body.classList.remove('fixed');

    setTimeout(() => {
      if (props.history) {
        props.history.push(ROUTES.ROOT);
      }
    }, 500);
  }

  return <div className={style.root}>
    {props.userId && <div className={style.back} onClick={navigate}>
      <i className="material-icons">
        arrow_back
      </i>
    </div>}
    <p className={style.title}>{props.name ? getName(props.name.firstName, props.name.lastName) : 'People'}</p>
  </div>;
}

export default Appbar;
