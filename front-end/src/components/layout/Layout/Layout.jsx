import React from 'react';
import './Layout.css';

function Layout({ children }) {
  return <div className="layout__wrapper">{children}</div>;
}

export default Layout;
