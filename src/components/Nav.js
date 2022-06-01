import React, { useState } from 'react'
import '../styles/nav.css'
import Logo from '../assets/logo.png'
import { NavLink,Link} from 'react-router-dom'
import { Icon } from '@iconify/react';

const Nav = () => {

    const [burger, setBurger] = useState(false)

    const hamburger = () => {
        setBurger(!burger)
    }

    return (
        <div className='nav'>
            <div>
                <img src={Logo} alt="MiddleMan Logo" />
            </div>
            <div>
                <ul>
                    <li><NavLink exact to='/' activeClassName= 'active'><Icon icon="fa-solid:home" /> HOME</NavLink></li>
                    <li><NavLink to='/buyer'><Icon icon="icons8:buy" />BUYER</NavLink></li>
                    <li><NavLink to='/seller'><Icon icon="healthicons:market-stall-negative" /> SELLER</NavLink></li>
                    <li><button><NavLink exact to='/login' activeClassName= 'active-button'><Icon icon="icon-park-outline:log" /> Log in</NavLink></button> </li>
                    <li><button><NavLink to='/register' activeClassName= 'active-button'><Icon icon="akar-icons:person-add" /> Sign Up</NavLink></button></li>    
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="burger">
                <Icon icon="icon-park-outline:hamburger-button" className='icon' onClick={hamburger}/>                
            </div>
            {burger && <div className='display'>
                    <li > <NavLink exact to = '/' activeClassName= 'actives'><Icon icon="fa-solid:home" className='icons' /> Home</NavLink> </li> <br />
                    <li> <NavLink  to = '/buyer'><Icon icon="icons8:buy" className='icons' /> Buyer</NavLink> </li> <br />
                    <li>  <NavLink to = '/seller'><Icon icon="healthicons:market-stall-negative" className='icons' /> Seller</NavLink> </li> <br />
                    <li> <NavLink to = '/login'><Icon icon="icon-park-outline:log" className='icons' /> Log in</NavLink> </li> <br />
                    <li> <NavLink to = '/register'><Icon icon="akar-icons:person-add" className='icons' /> Sign Up</NavLink> </li> 
                    
                </div>
}
            
        </div>
    )
}

export default Nav
