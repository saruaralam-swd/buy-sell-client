import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-accent text-white'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div>
          <div><img src={footerLogo} alt="" /></div>
        </div>
        <div>
          <h2>Important Link</h2>
          <Link>Home</Link> <br />
          <Link>Link2</Link> <br />
          <Link>Link3</Link> <br />
          <Link>Link4</Link> <br />
          <Link>Link5</Link>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Sign up and receive the latest tips via email.</p>
          <p>Email</p>
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs text-black" /> <br />
          <button className='btn btn-primary'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;