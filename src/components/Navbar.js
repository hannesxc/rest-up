import React from 'react';
import restUp from '../assets/restUp.png'

function Navbar() {
  return (
    <div className='parentBox header'>
      <a href='/rest-up'><img src={restUp} alt='header'/></a>
    </div>
  );
}

export default Navbar;