import React from 'react'
import './Header.css'
import headerLogo from '../assets/logobrand.png'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateContext'
import { getCartTotal } from '../reducer';

const Header = () => {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="header">
                <div className="header_logo">
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <img className="header_img" src={headerLogo} alt="header_logo" />
                    </Link>
                    <div className="header_name">
                        <h3>Target</h3>
                        <span>Cham Towers, Plot 12 Nkruwa Rd, Kampala, Ug</span>
                    </div>
                    
                </div>
            

            <div className="header_search">
                <input  
                    className="header_input"
                    type="text"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_signIn">
                <PersonIcon className="header_personIcon" />
                <div className="header_log">
                    <span className="header_welcome">Welcome</span>
                    <span className="header_logIn">Log in</span>
                </div>
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/checkout" >
            <div className="cart_basket">
                <span className="header_optionLineTwo header_basketCount">{getCartTotal(basket)}</span>
                <ShoppingCartIcon />
            </div>
            </Link>
        </div>

    )
}

export default Header
