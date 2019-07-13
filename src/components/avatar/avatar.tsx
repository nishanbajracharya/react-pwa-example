import classnames from 'classnames';
import React from 'react';

import style from './avatar.module.css';

interface IAvatarProps {
  url?: string;
  size?: number;
  fallback?: string;
  withBorder?: boolean;
  withThickBorder?: boolean;
}

const defaultProps: IAvatarProps = {
  fallback: 'Avatar',
  size: 32,
  url: '',
  withBorder: true,
  withThickBorder: false,
};

function Avatar(receivedProps: IAvatarProps) {
  const props = { ...defaultProps, ...receivedProps };
  return props.url ?
    <img
      src={props.url} height={props.size} width={props.size} alt={props.fallback} className={classnames(style.image, {
        [style.border]: props.withBorder,
        [style['thick-border']]: props.withThickBorder,
    })} /> :
    <span className={classnames(style['avatar-text'], {
      [style.border]: props.withBorder,
    })}>{props.fallback && props.fallback[0]}</span>;
}

export default Avatar;
