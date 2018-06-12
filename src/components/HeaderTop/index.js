import React from 'react';
import starblog from '../../static/Header/starblog.png';
import youtube from '../../static/Header/youtube.png';
import stream from '../../static/Header/stream.png';

import './style.css';

const HeaderTop = () =>  (
    <div className="HeaderTop">
       <div className="Header-Container"> 
            <div className="Header-Top">
                <div className="Phone">
                    8 (800) 500-75-55
                    <span>Бесплатный звонок по России</span>
                </div>
                <div className="StarBlog">
                    <img src={starblog} alt="starblog" />
                    <span>Звездный блог </span>
                </div>
                <div className="Youtube">
                    <img src={youtube} alt="youtube" />
                    <span >Смотрите нас на YouTube</span>
                </div>
                <div className="Stream">
                    <img className="stream-logo" src={stream} alt="youtube" />
                    <span>Смотрите наш прямой эфир</span>
                </div>
            </div>
        </div>
    </div>
);

export default HeaderTop;
