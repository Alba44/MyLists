import React from 'react';
import './Dashboard.css';
import data from '../../shared/links';

export default function Dashboard() {
  return (
    <div className="main-container">
      <h2 className="main_title">Projects</h2>
      <ul>
        {
          data.map((link) => (
            <li key={link.id}>
              <a href={link.url ? link.url : '#'}>{link.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
