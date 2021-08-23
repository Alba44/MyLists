import React, { useState } from 'react';
import './Header.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addLink } from '../../redux/actions/actions';

function Header({ actions }) {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  return (
    <header>
      <h1 className="header_title">My Links</h1>
      <form className="header_inputs-container">
        <input className="input-box link" type="text" placeholder="New link" value={link} onChange={(event) => setLink(event.target.value)} />
        <input className="input-box name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <button className="add-link" type="button" onClick={() => actions.addLink(link, name)}>Add Link</button>
      </form>
    </header>
  );
}

Header.propTypes = {
  actions: propTypes.shape({
    addLink: propTypes.func,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addLink }, dispatch),
  };
}

export default connect(undefined, mapDispatchToProps)(Header);
