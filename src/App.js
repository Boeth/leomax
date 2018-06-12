import React, { Component } from 'react';
import './App.css';

import HeaderTop from './components/HeaderTop'
import HeaderBot from './components/HeaderBot'
import Menu from './components/Menu'
import Additional from './components/Additional'
import Footer from './components/Footer'
import CartItem from './components/CartItem'
import CartHeader from './components/CartHeader'
import CartLabel from './components/CartLabel'
import { products } from './data'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,     
      discount: 0
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.countTotalSum = this.countTotalSum.bind(this);
    this.submitPromo = this.submitPromo.bind(this);
    this.countTotalQuantity = this.countTotalQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  updateQuantity = (id, q) => {
    let products = [...this.state.products];
    let index = products.findIndex(el => el.id === id);
    products[index].quantity = q;
    this.setState({ products });
  }

  removeItem = (id) => {
    let products = [...this.state.products];
    let index = products.findIndex(el => el.id === id);
    let filteredArray = this.state.products.filter((_, i) => i !== index)
    this.setState({ products: filteredArray });
  }


  countTotalSum = () => {
    return this.state.products.reduce(function (a, b) {
      return a + b.price * b.quantity;
    }, 0)
  }

  countTotalQuantity = () => {
    return this.state.products.reduce(function (a, b) {
      return a + b.quantity;
    }, 0)
  }

  submitPromo = (e) => {
    if (e) e.preventDefault();
    const promo = this.input.value;
    if (promo == 123456) {
      this.setState({ discount: 1800 });
    }
  }


  render() {
    const { promo } = this.state;
    return (
      <div className="App">
        <HeaderTop />
        <HeaderBot total={this.countTotalQuantity()} />
        <Menu />
        <CartLabel />
        <CartHeader />

        <div className="CartList">
          <div className="Cart">
            {this.state.products.map(item =>
              <div className="cItem" key={item.id}>
                <CartItem {...item} updateQuantity={this.updateQuantity} removeItem={this.removeItem} />
              </div>
            )}
          </div>

          <div className="cartFooter">
            <div className="promo">
              <p>Есть промокод?</p>
              <form onSubmit={this.submitPromo}>
                <input placeholder="Введите промокод" type="text" ref={(element) => { this.input = element }} class="txtbox" />
                <input type="submit" value="Применить" class="btncls" />
              </form>
            </div>

            <div className="basket">


              <div className="sum">
                Сумма заказа:
          <span>{this.countTotalSum()} руб.</span>
              </div>

              <div className="promo-disc">
                Промокод:
          <span>-{this.state.discount} руб.</span>
              </div>


              <div className="total">
                Всего:
          {this.state.discount == 0 ?
                  <span>
                    {this.countTotalSum()} руб.
                  </span>
                  :
                  <span>
                    {this.countTotalSum() - this.state.discount} руб.
                  </span>
                }
              </div>
              <button className="btncls">Оформить заказ</button>
            </div>
          </div>

        </div>
        <Additional />
        <Footer />
      </div>
    );
  }
}

export default App;