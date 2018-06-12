import React from 'react';

import './style.css';

const Menu = () => (
  <div className="Menu">
 
    <ul className="tabs">
      <li>
        <input type="radio" name="tabs" id="tab-1" checked />
        <label for="tab-1">Одежда и аксессуары</label>
        
        <div className="tab-content">
          <span>Женская одежда</span>
          <span>Мужская одежда</span>
          <span>Аксессуары</span>
        </div>
       
      </li>
      <li>
        <input type="radio" name="tabs" id="tab-2" />
        <label for="tab-2">Обувь</label>
      </li>
      <li>
        <input type="radio" name="tabs" id="tab-3" />
        <label for="tab-3">Украшения</label>
      </li>
      <li>
        <input type="radio" name="tabs" id="tab-4" />
        <label for="tab-4">Красота и здоровье</label>
      </li>
      <li>
        <input type="radio" name="tabs" id="tab-5" />
        <label for="tab-5">Товары для дома</label>
      </li>
      <li>
        <input type="radio" name="tabs" id="tab-6" />
        <label for="tab-6">Товары для кухни</label>
      </li>
    </ul>
  
  </div>


);

export default Menu;