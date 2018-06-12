import React from 'react';
import shoplogo from '../../static/Header/shoplogo.png';
import searchicon from '../../static/Header/searchicon.png';
import usericon from '../../static/Header/usericon.png';
import bagicon from '../../static/Header/bagicon.png';

import { declOfNum } from '../../utils'


import './style.css';



const HeaderBot = ({ total }) => (
    <div className="HeaderBot">
        <div className="Header-Container">
            <div className="Header-Bot">
                <div className="ShopInfo">
                    <img src={shoplogo} alt="shoplogo" />
                    <span>New Look</span>
                </div>
                <div className="Search">
                    <form>
                        <input type="text" placeholder="Поиск по сайту" />
                        <input type="image" className="SearchButton" src={searchicon} alt="searchicon" />
                    </form>
                </div>
                <div className="User">
                    <img src={usericon} alt="usericon" />
                    <span>Анастасия</span>
                </div>
                <div className="ShopCart">
                    <img src={bagicon} alt="bagicon" />
                    <span>В корзине:</span>
                    <br/>                  
                     <span>{total} {declOfNum(total, ['Товар', 'Товара', 'Товаров'])}</span>
                </div>
            </div>
        </div>
    </div>
);

export default HeaderBot;
