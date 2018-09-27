import React from "react";
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. And a new fish
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        // passing pieces of state that we wish to update
        this.setState({fishes});
    };

    addToOrder = key => {
        // 1. Take a copy of state
        const order = {...this.state.order};
        // 2. Either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our object
        this.setState({order});
    };

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    {/*passing dynamic data with props*/}
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {/* Displaying State with JSX */}
                        {Object.keys(this.state.fishes).map(key => <Fish
                            key={key}
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}
                        />)}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        );
    }
}

export default App;