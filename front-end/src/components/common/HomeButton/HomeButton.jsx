import React from 'react';
import { Link } from 'react-router-dom';

function InternalPage() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default InternalPage;
