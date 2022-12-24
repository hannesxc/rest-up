import React from 'react';
import restUp from '../assets/restUp.png'

function Navbar() {
  return (
    <div className='parentBox header'>
      <a href='/'><img src={restUp} alt='header'/></a>
    </div>
  );
}

export default Navbar;