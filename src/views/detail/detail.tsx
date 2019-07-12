import React from 'react';

import style from './detail.module.css';
import Appbar from '../../components/appbar';

import * as Route from 'RouteProps';

function Detail(props: Route.Props) {
  return <div>
    <Appbar userId={props.match.params.id} />
    Detail
  </div>;
}

export default Detail;
