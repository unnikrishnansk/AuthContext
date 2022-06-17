import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';

const Navbar = () => {

    const { isAuthorized,login,logout} = useContext(AuthContext);

  return (
    <div className='navbar'>

<div className='leftnavbar'>
    <div className='menuhead'>Menu</div>
    <div className='menuhead'>Deals</div>
    </div>

<div className='rightnavbar'>
    <div className='menuhead'>
        <button className='togglebttn' onClick={() => {
        if(isAuthorized)
        {
            logout();
        }
        else{
            login("r","z");
        }
    }}> {isAuthorized ? "Login" : "Logout"} </button>
    </div>

       </div>
    </div>
  )
}

export default Navbar;