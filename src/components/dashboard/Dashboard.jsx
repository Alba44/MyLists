import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addLink, loadLinks } from '../../redux/actions/actions';
import './Dashboard.css';

function Dashboard({ links, actions }) {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    actions.loadLinks();
  }, [link]);

  return (
    <div className="main-container">
      <form className="header_inputs-container">
        <input className="input-box link" type="text" placeholder="URL" value={link} onChange={(event) => setLink(event.target.value)} />
        <input className="input-box name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <button className="add-link" type="button" onClick={() => actions.addLink(link, name)}>Add Link</button>
      </form>
      <h2 className="main_title">Links</h2>
      <ul>
        {
          links && links.map((newLink) => (
            <li key={newLink.id}>
              <a href={newLink.url ? newLink.url : '#'}>{newLink.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Dashboard.propTypes = {
  links: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addLink: PropTypes.func.isRequired,
    loadLinks: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ links }) {
  return {
    links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addLink, loadLinks }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
