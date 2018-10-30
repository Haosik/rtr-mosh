import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return (
    <ul>
      {props.links.map(link => (
        <li>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
