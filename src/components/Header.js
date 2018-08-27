import React from "react";

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                     Day</h1>
//                 <h3 className="tagline">
//                     {/*passing dynamic data with props*/}
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         );
//     };
// }

// Stateless Functional Component
// function Header(props) {
//     return (
//         <header className="top">
//             <h1>Catch
//                 <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                 Day</h1>
//             <h3 className="tagline">
//                 {/*passing dynamic data with props*/}
//                 <span>{props.tagline}</span>
//             </h3>
//         </header>
//     );
// }

// Stateless Functional Component
// arrow function with implicit return
// const Header = (props) => (
//     <header className="top">
//         <h1>Catch
//             <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//             Day</h1>
//         <h3 className="tagline">
//             {/*passing dynamic data with props*/}
//             <span>{props.tagline}</span>
//         </h3>
//     </header>
// );

// Stateless Functional Component
// arrow function with one argument doesn't need parentheses
// const Header = props => (
//     <header className="top">
//         <h1>Catch
//             <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//             Day</h1>
//         <h3 className="tagline">
//             {/*passing dynamic data with props*/}
//             <span>{props.tagline}</span>
//         </h3>
//     </header>
// );

// Stateless Functional Component
// object destructuring
const Header = ({tagline}) => (
    <header className="top">
        <h1>Catch
            <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
            Day</h1>
        <h3 className="tagline">
            {/*passing dynamic data with props*/}
            <span>{tagline}</span>
        </h3>
    </header>
);

export default Header;