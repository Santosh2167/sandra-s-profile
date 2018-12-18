import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./aboutMe";
import Welcome from "./welcome";
import BioMenus from "./bioMenus";
import FavouriteFood from "./favouriteFood";


// const Welcome = () =>{
//     return <h1>Welcome To Sandras Profile Page</h1>;
// };

// const BioMenus = () => {
//     return(
//         <ul>
//             <li><a href="#AboutMe">About Me</a></li>
//             <li><a href="#">Favourite Foods</a></li>
//             <li><a href="#">Contact Details</a></li>
//         </ul>

//     );


// };

// const AboutMe = () => {
//    return(
//         <h1 id="AboutMe">About Me</h1>
//         <ol>
//             <li><string>Pop</string> culture maven. Beer fan. Award-winning Junkie. Extreme coffee enthusiast. Thinker, Tv Specialist    </li>
//         </ol>
//    ) 
// };


const App = ()=> {
    return(
        <div>
            <Welcome/>
            <BioMenus/>
            <AboutMe/>
            <FavouriteFood/>
        </div>
    ); 
};
ReactDOM.render(
    <App />,
    document.getElementById("root")
)