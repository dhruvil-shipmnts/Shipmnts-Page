import React from 'react';
import './common.css';
import { PlayLogo } from '../../assets';

const DemoButton = ({
  link = 'https://share.hsforms.com/1bgqKhlUxTRSRt1HEWX-Jsg1yzii',
  label = 'Get Demo',
  showPlayLogo = true,
  size = 'small',
  style = {},
  variant = 'primary',
  icon = null,
  className = '',
}) => {
  return (
    <button
      className={`btn ${className} demo-button-${size} demo-button demo-button-${variant} btn-rounded button-${size}`}
      style={style}
    >
      <a href={link}>{label}</a>
      {icon ? icon : showPlayLogo && <img src={PlayLogo} alt="" />}
    </button>
  );
};

export default DemoButton;
