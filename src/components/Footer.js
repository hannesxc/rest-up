import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer parentBox'>
        <a href='https://github.com/hannesxc/rest-up/' target='_blank' rel='noreferrer'><GitHubIcon sx={{ fontSize: 30 }} /></a>
        <h3>Copyright &#169; Rest-Up Services, Ltd.</h3>
        <h3>Aditya Chakravorty, All Rights Reserved.</h3>
    </div>
  );
}

export default Footer;