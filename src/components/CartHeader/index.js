import React from 'react';

import './style.css';

const CartHeader = () => (
    <div className="CartHeader-Container">
    <div className="Columns">
       
            <p className="hItem">Товар</p>
            <p className="hDescr">Описание</p>
            <p className="hQuant">Количество</p>
            <p className="hPrice">Цена</p>
            <p className="hDel">Удалить</p>
        </div>
    </div>
);

export default CartHeader;