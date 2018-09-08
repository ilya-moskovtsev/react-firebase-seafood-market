import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
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
            <form action="" className="store-selector">
                <h2>Please name your store</h2>
                <input type="text" placeholder="Store Name" defaultValue={getFunName()}></input>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;