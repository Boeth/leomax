import React from 'react';
import ShopHeader from '../../static/Footer/ShopHeader.png';
import Facebook from '../../static/Footer/Facebook.png';
import Youtubeicon from '../../static/Footer/Youtubeicon.png';
import Instagram from '../../static/Footer/Instagram.png';
import Pinme from '../../static/Footer/Pinme.png';
import Pinterest from '../../static/Footer/Pinterest.png';
import odnoklassniki from '../../static/Footer/odnoklassniki.png';
import Vkontakte from '../../static/Footer/Vkontakte.png';


import './style.css';

const Footer = () => (
    <div className="Footer">
        <div className="Footer-Container">
            <div className="SocMedia">
                <span>SHOP24 в социальных сетях:</span>
                <div><img src={Vkontakte} alt="Vkontakte" /></div>
                <div><img src={Facebook} alt="Facebook" /></div>
                <div><img src={odnoklassniki} alt="odnoklassniki" /></div>
                <div><img src={Pinterest} alt="Pinterest" /></div>
                <div><img src={Pinme} alt="Pinme" /></div>
                <div><img src={Instagram} alt="Instagram" /></div>
                <div><img src={Youtubeicon} alt="Youtubeicon" /></div>
            </div>
            <div className="Footer2">
                <div className="Contacts">
                    <img className="ShopHeader" src={ShopHeader} alt="ShopHeader" />
                    <div className="phNubmers">
                        <div className="phone">8 (800) 500-75-55*</div>
                        <div >*Бесплатный звонок по всей России</div>
                        <div className="phone">8 (495) 733-96-03</div>
                    </div>
                </div>
                <div className="list">
                    <h1>Каталог товаров</h1>
                    <ul >
                        <li>Одежда и аксессуары </li>
                        <li>Обувь</li>
                        <li>Украшения</li>
                        <li>Красота и здоровье</li>
                        <li>Товары для дома, дачи и отдыха</li>
                        <li>Товары для кухни</li>
                    </ul>
                </div>
                <div className="list">
                    <h1>Заказ</h1>
                    <ul >
                        <li>Оплата и доставка </li>
                        <li>Возврат</li>
                        <li>Помощь</li>
                        <li>Благотворительный Фонд Константина Хабенского</li>
                        <li>Гарантия на дополнительное обслуживание товара</li>
                        <li>Пользовательское соглашение</li>
                    </ul>
                </div>
                <div className="list">
                    <h1>Shop24</h1>
                    <ul >
                        <li>Смотреть прямой эфир</li>
                        <li>Расписание передач</li>
                        <li>Акции</li>
                        <li>Личный кабинет</li>
                        <li>Поиск и карта сайта</li>
                        <li>Карта брендов</li>
                        <li>Обратная связь</li>
                    </ul>
                </div>
                <div className="list">
                    <h1>Информация</h1>
                    <ul>
                        <li>О канале</li>
                        <li>Сотрудничество</li>
                        <li>Покупайте с нами!</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
            <div className="footer3">
                <span>Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.</span>
                <span>При использовании материалов сайта ссылка на www.shop24.com обязательна.</span>
                <span>115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII</span>
                <span>Телефон  8 800 500-75-55</span>
            </div>
        </div>
    </div>
);

export default Footer;
