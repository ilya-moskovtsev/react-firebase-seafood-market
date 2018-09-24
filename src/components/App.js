import React from "react";
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

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

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    {/*passing dynamic data with props*/}
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        );
    }
}

export default App;