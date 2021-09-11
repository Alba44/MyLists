import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addLink, loadLinks, deleteLink } from '../../redux/actions/actions';
import './Dashboard.css';

function Dashboard({ links, actions }) {
  const [newURL, setURL] = useState('');
  const [name, setName] = useState('');
  const [updatedURL, setNewURL] = useState('');
  const [updatedName, setNewName] = useState('');

  useEffect(() => {
    actions.loadLinks();
  }, [newURL]);

  return (
    <div className="main-container">
      <form className="header_inputs-container">
        <input className="input-box" type="text" placeholder="URL" value={newURL} onChange={(event) => setURL(event.target.value)} />
        <input className="input-box" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <button className="add-link" type="button" onClick={() => actions.addLink(newURL, name)}>Add Link</button>
      </form>
      <h2 className="main_title">Links</h2>
      <ul className="main_links-list">
        {
          links && links.map((link) => (
            <>
              <li key={link.id} className="list_link">
                <a className="list_link-anchor" href={link.url ? link.url : '#'}>{link.text}</a>
                <button type="button" className="list_link-btn delete" onClick={() => actions.deleteLink(link.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 172 172"
                  >
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#3498db"><path d="M71.08424,14.44531c-3.53111,-0.02879 -6.92644,1.35892 -9.42654,3.85273c-2.5001,2.49381 -3.89635,5.88563 -3.87646,9.4168v4.19922h-17.19974c-6.44548,0.00015 -11.89081,4.78131 -12.72467,11.17263c-0.83385,6.39132 3.20252,12.40952 9.43222,14.06336v82.76792c0,4.89192 1.79354,9.48547 4.92818,12.78203c3.11828,3.30545 7.45902,5.18255 12.0032,5.19063h63.55911c4.54439,-0.00798 8.88538,-1.88508 12.00386,-5.19063c3.13396,-3.29655 4.92752,-7.89011 4.92752,-12.78203v-82.76792c6.22969,-1.65384 10.26607,-7.67204 9.43222,-14.06336c-0.83385,-6.39132 -6.27918,-11.17248 -12.72467,-11.17263h-17.19974v-4.19922c0.0199,-3.53117 -1.37636,-6.92299 -3.87646,-9.4168c-2.5001,-2.49381 -5.89543,-3.88152 -9.42654,-3.85273zM71.07834,21.16406c0.00197,0 0.00394,0 0.00591,0h29.83151c1.74972,-0.0309 3.43734,0.64824 4.67792,1.88251c1.24058,1.23427 1.92831,2.91841 1.90632,4.66827v4.19922h-43v-4.19922c-0.02185,-1.74878 0.6651,-3.43194 1.90437,-4.66601c1.23927,-1.23407 2.92529,-1.91396 4.67397,-1.88477zM40.58151,38.63281h90.83698c3.3396,0 6.04688,2.70728 6.04688,6.04688c0,3.3396 -2.70728,6.04688 -6.04687,6.04688h-90.83698c-3.3396,0 -6.04687,-2.70728 -6.04687,-6.04687c0,-3.3396 2.70728,-6.04687 6.04688,-6.04687zM44.00781,57.44531h83.98438v82.47266c0,6.31999 -4.4681,11.25391 -10.21263,11.25391h-63.55911c-5.74453,0 -10.21263,-4.93391 -10.21263,-11.25391zM66.17969,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM86,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM105.82031,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z" /></g>
                    </g>

                  </svg>
                </button>
                <button type="button" className="list_link-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 172 172"
                  >
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#3498db"><path d="M86,17.2c-22.49321,0 -42.48108,10.83067 -55.04,27.5536v-20.6736c0.01273,-0.92983 -0.35149,-1.82522 -1.00967,-2.48214c-0.65819,-0.65692 -1.55427,-1.01942 -2.48408,-1.00489c-1.89722,0.02966 -3.41223,1.58976 -3.38625,3.48703v34.4h4.46125h29.93875c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058h-23.93219c11.10753,-16.58095 29.96863,-27.52 51.45219,-27.52c34.23664,0 61.92,27.68336 61.92,61.92c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993c0,-37.9552 -30.8448,-68.8 -68.8,-68.8zM20.58625,82.51297c-1.89722,0.02966 -3.41223,1.58976 -3.38625,3.48703c0,37.9552 30.8448,68.8 68.8,68.8c22.4991,0 42.48507,-10.83907 55.04,-27.56703v20.68703c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-34.4h-3.655c-0.42397,-0.08049 -0.85931,-0.08049 -1.28328,0l-29.46172,0.00672c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058l23.93219,-0.00672c-11.10473,16.58 -29.96683,27.52 -51.45219,27.52c-34.23664,0 -61.92,-27.68336 -61.92,-61.92c0.01273,-0.92983 -0.35149,-1.82522 -1.00967,-2.48214c-0.65819,-0.65692 -1.55427,-1.01942 -2.48408,-1.00489z" /></g>
                    </g>

                  </svg>
                </button>
              </li>
            </>
          ))
        }
      </ul>
      <form className="main_update-box">
        <input className="input-box update" type="text" placeholder="URL" value={updatedURL} onChange={(event) => setNewURL(event.target.value)} />
        <input className="input-box update" type="text" placeholder="Name" value={updatedName} onChange={(event) => setNewName(event.target.value)} />
        <button type="button" className="update-link">Update</button>
      </form>
    </div>
  );
}

Dashboard.propTypes = {
  links: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addLink: PropTypes.func.isRequired,
    loadLinks: PropTypes.func.isRequired,
    deleteLink: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ links }) {
  return {
    links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addLink, loadLinks, deleteLink }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
