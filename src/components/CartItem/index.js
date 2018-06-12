import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cancel from '../../static/cancel.png';
import './style.css';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.removeItem = this.removeItem.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    removeItem = () => {
        this.props.removeItem(this.state.id);
    }

    onIncrement = () => {
        const q = this.state.quantity + 1
        this.setState({
            quantity: q
        })
        this.props.updateQuantity(this.state.id, q);
    }
    onDecrement = () => {
        if (this.state.quantity > 1) {
            const q = this.state.quantity - 1
            this.setState({
                quantity: q
            })
            this.props.updateQuantity(this.state.id, q);
        }
    }

    render() {
        const { name, image, code, size, color, quantity, price } = this.state
        return (
            <div className="CartItem">
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="Description">
                <div>
                    <p className="name">{name}</p>
                    <p className="code">Код: {code}</p>
                    <p className="size">Размер: {size}</p>
                    <p className="color">Цвет: {color}</p>
                    </div>
                </div>

                <div className="quantity">
                    <button onClick={() => this.onDecrement()} type="button">
                        -
                    </button>
                    {quantity}
                    <button onClick={() => this.onIncrement()} type="button">
                        +
                    </button>
                </div>

                <div className="price">{price} руб.</div>

                <div className="delete">
                <input type="image" src={cancel} alt="cancel" onClick={() => this.removeItem()}  />
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {    
    name: PropTypes.string,
    image: PropTypes.string,
    code: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
};

export default CartItem;