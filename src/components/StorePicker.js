import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    // #region this Binding
    // constructor() {
    //     super();
    //     console.log("Going to create a component");
    //     not the greatest way when component has many methods
    //     this.goToStore = this.goToStore.bind(this);
    // }
    //
    // custom methods need binding to access this
    // goToStore(event) {
    //     console.log(this);
    // }
    //
    // componentDidMount() {
    //     console.log("Mounted");
    //     console.log(this);
    // }
    // #endregion

    storeNameInput = React.createRef();

    // don't need to bind this for properties
    goToStore = event => {
        // 1. Stop the form from submitting
        // prevent page refresh
        event.preventDefault();
        // 2. Get the text from the input
        const storeName = this.storeNameInput.value.value;
        // 3. Change the page to /store/whatever-they-entered without refreshing
        // push is a ReactRouter method
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        //too complex
        // return React.createElement('p', {
        //     className: "hey"
        // }, 'text');

        //better use JSX
        // return <p className="hey">I'm a store picker+</p>;

        //emmet form.store-selector
        // return <form action="" className="store-selector"></form>

        //multi-line return
        //return <form action="" className="store-selector">
        //<h2>Please name your store</h2>
        //</form>;

        //use brackets () to properly indent multi-line return
        // return (
        //     <form action="" className="store-selector">
        //         <h2>Please name your store</h2>
        //     </form>
        // );

        //return sibling elements with <div> container
        //<div> will be displayed in DOM
        // return (
        //     <div>
        //         <p>Fish</p>
        //         <form action="" className="store-selector">
        //             <h2>Please name your store</h2>
        //         </form>
        //     </div>
        // );

        //return sibling elements with <React.Fragment>
        //<React.Fragment> will not be in DOM
        // return (
        //     <React.Fragment>
        //         <p>Fish</p>
        //         <form action="" className="store-selector">
        //             <h2>Please name your store</h2>
        //         </form>
        //     </React.Fragment>
        // );

        //use {} to write in JS inside JSX
        //use block-comment {/*<h2>Please name your store</h2>*/}
        //inside JSX
        // return (
        //     <React.Fragment>
        //         {/*Comment is a sibling element.
        //         It needs to be wrapped in Fragment*/}
        //         <p>Fish</p>
        //         <form action="" className="store-selector">
        //             <h2>Please name your store</h2>
        //         </form>
        //     </React.Fragment>
        // );

        return (
            // onSubmit - React SyntheticEvent
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please name your store</h2>
                <input type="text"
                       ref={this.storeNameInput}
                       placeholder="Store Name"
                       defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;