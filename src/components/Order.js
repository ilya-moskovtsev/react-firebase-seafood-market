import React from "react";
import {formatPrice} from "../helpers";

// Displaying Order State with JSX
class Order extends React.Component {
    renderList = orderKeys => (
        <ul className="order">
            {orderKeys.map((key) => {
                const fish = this.props.fishes[key];
                const count = this.props.order[key];
                const fishName = fish.name || 'fish';
                const isAvailable = fish && fish.price && fish.status === 'available';
                return isAvailable ? <li key={key}>{count} lbs {fishName} {formatPrice(fish.price * count)}</li> :
                    <li key={key}>Sorry {fishName} is no longer available</li>;
            })}
        </ul>
    );

    renderTotal = orderKeys => {
        const total = orderKeys.reduce((previousValue, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.price && fish.status === 'available';
            return isAvailable ?
                previousValue + fish.price * count :
                previousValue;
        }, 0);
        return (
            <div className="total">
                Total: <strong>{formatPrice(total)}</strong>
            </div>
        )
    };

    render() {
        const orderKeys = Object.keys(this.props.order);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {this.renderList(orderKeys)}
                {this.renderTotal(orderKeys)}
            </div>
        );
    };
}

export default Order;