import React from 'react';
import './styles.scss';

import { RiRestaurantFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';


function Footer() {
    return (
        <div className="footer">
            <h2><RiRestaurantFill />  Bel caffè</h2>
            <span>1415 State Highway 19, Warkworth, New York</span>
            <div className='social_media'>
                <span><BsFacebook /></span>
                <span><FaInstagram /></span>
                <span><FaGoogle /></span>
                <span><AiTwotoneMail /></span>
            </div>
            <span>Copyright © 2022 | Bel caffè | Website by Ribeiro</span>
        </div>
    );
}

export default Footer;