import classnames from 'classnames';
import React from 'react';

import style from './avatar.module.css';

interface IAvatarProps {
  url?: string;
  size?: number;
  fallback?: string;
  withBorder?: boolean;
}

const defaultProps: IAvatarProps = {
  fallback: 'Avatar',
  size: 32,
  url: '',
  withBorder: true,
};

function Avatar(receivedProps: IAvatarProps) {
  const props = { ...defaultProps, ...receivedProps };
  return props.url ?
    <img src={props.url} height={props.size} alt={props.fallback} className={classnames(style.image, {
      [style.border]: props.withBorder,
    })} /> :
    <span className={classnames(style['avatar-text'], {
      [style.border]: props.withBorder,
    })}>{props.fallback && props.fallback[0]}</span>;
}

export default Avatar;
