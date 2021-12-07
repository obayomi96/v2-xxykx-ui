import React from 'react';
import { withRouter, Link} from 'react-router-dom';

function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="App">
      <div>Header component</div>
      <div>
        <p><Link to="/"> Logout </Link> </p>
      </div>
    </div>
  );
}

export default Header;
