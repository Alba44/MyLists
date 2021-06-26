import React from 'react';
import './Dashboard.css';
import data from '../../shared/links';

export default function Dashboard() {
  return (
    <div>
      <ul>
        {
          data.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
