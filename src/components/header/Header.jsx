import React, { useState } from 'react';
import './Header.css';
import { addLink } from '../../redux/actions/actions';

export default function Header() {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  function addNewLink(url, label) {
    addLink(url, label);
  }
  return (
    <header>
      <h1 className="header_title">My Links</h1>
      <form className="header_inputs-container">
        <input className="input-box link" type="text" placeholder="New link" value={link} onChange={(event) => setLink(event.target.value)} />
        <input className="input-box name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <button className="add-link" type="button" onClick={addNewLink(link, name)}>Add Link</button>
      </form>
    </header>
  );
}
