import React from 'react';
import '../styles/components/Button.css';

export default function Button({ children }) {
  return (
    <button type="button" className="button">{ children }</button>
  );
}
