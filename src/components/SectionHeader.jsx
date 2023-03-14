import React from 'react';
import '../styles/components/SectionHeader.css';

export default function SectionHeader({ title, icon }) {
  return (
    <div className="header">
      <div className="header__icon-div">
        <i className={`${icon} header__icon fs-6`} />
      </div>
      <h3 className="header__title">{title}</h3>
      <div className="header__line" />
    </div>
  );
}
