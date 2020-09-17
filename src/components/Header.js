import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

const imgurl = 'amazon_PNG23.png'

function Header() {
    const [{ basket }] = useStateValue()

    console.log(basket);
    

    return (
        <nav className="header">
            {/*logo*/}
            <Link to="/">
                <img className="header_logo_img" src={imgurl} alt=""></img>
            </Link>
            <h2 className="header_text" style={{ "color": "white" }}>vinash</h2>

            {/*search box*/}
            <input type="text" className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon"></SearchIcon>

            {/* 3 links */}
            <div className="headerNav">
                {/* 1 link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="aa">Hello avi</span>
                        <span className="b">Sign in</span>
                    </div>
                </Link>

                {/* 2 link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_option">
                        <span className="aa">Returns</span>
                        <span className="b">Orders</span>
                    </div>
                </Link>

                {/* 3 link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="aa">Your</span>
                        <span className="b">Prime</span>
                    </div>
                </Link>

                {/* 4 link */}
                {/*shopping basket icon*/}
                {/*basket icon with number quantity */}
                <Link to="/checkout">
                    <div className="header_optionBsket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="cc">{basket?.length}</span>
                    </div>

                </Link>

            </div>

            
        </nav>
    )
}

export default Header
