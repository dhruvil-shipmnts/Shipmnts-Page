import React from 'react';
import './FloatingButton.css'; // Import the CSS file
import { WhatsAppOutlined } from '@ant-design/icons';

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B919106669107&text=Hello!%20I%27d%20like%20to%20start%20a%20chat%20with%20Shipmnts"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppOutlined
          style={{
            fontSize: '3rem',
          }}
        />
      </a>
    </button>
  );
};

export default FloatingButton;
