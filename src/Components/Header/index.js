import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiRestaurantFill } from 'react-icons/ri';

function Header() {
    const [scroll, setScroll] = useState(false);

    function togleHeader() {
        if (window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', togleHeader);
    }, []);

    const [click, setClick] = useState(false)

    function togleMenu() {
        setClick(!click)
    }

    return (
        <header className={scroll ? 'header active' : 'header'} onClick={togleMenu} >
            <div className='nav_menu'>
                <Link to="/" className='icon'><RiRestaurantFill /> Bel caffè</Link>
            </div>
            <div className='nav_menu'>
                {
                    click ? <div className='icon' onClick={togleMenu}>X</div> : <div className='icon' onClick={togleMenu}><GiHamburgerMenu /></div>
                }
            </div>
            {
                click &&
                <nav >
                    <Link to="reservation"> Reservations</Link>
                    <Link to="menu-wine-list"> Menu & Wine list </Link>
                    <Link to="gift-a-francescana-experience"> Gift a Francescana Experience</Link>
                    <Link to="events-banqueting"> Events & Banqueting  </Link>
                    <Link to="location"> Location </Link>
                </nav>
            }
        </header>
    );
}

export default Header;