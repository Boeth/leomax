import React from 'react';
import itemimg1 from '../../static/Additional/item-1.png';
import itemimg2 from '../../static/Additional/item-2.png';
import itemimg3 from '../../static/Additional/item-3.png';
import itemimg4 from '../../static/Additional/item-4.png';


import './style.css';

const Additional = () => (
    <div className="Additional">
        <div className="Additional-Container">
            <div className="addLabel">
                <h2><span>Добавьте к вашему заказу</span></h2>
            </div>
            <div className="addList">
                <figure className="itemPreview">
                    <img src={itemimg1} alt="itemimg1" />
                    <p>Солнечные очки зеленого цвета в  стиле ретро</p>
                    <span>2 450 руб.</span>
                </figure>
                <figure className="itemPreview">
                    <img src={itemimg2} alt="itemimg2" />
                    <p>Шляпа</p>
                    <span>800 руб.</span>
                </figure>
                <figure className="itemPreview">
                    <img src={itemimg3} alt="itemimg3" />
                    <p>Платье-миди с расклешенной юбкой</p>
                    <span>2 450 руб.</span>
                </figure>
                <figure className="itemPreview">
                    <img src={itemimg4} alt="itemimg4" />
                    <p>Платье-миди с расклешенной юбкой</p>
                    <span>2 450 руб.</span>
                </figure>
            </div>
        </div>
    </div>
);

export default Additional;