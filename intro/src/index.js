import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./aboutMe";
import Welcome from "./welcome";
import BioMenus from "./bioMenus";
import FavouriteFood from "./favouriteFood";
import Ques from "./ques";
import IceCream from "./iceCream";
import LoadedFried from "./loadedFried";
import Contact from "./contact";
import Food from "./food";
import Pizza from "./pizza";

const App = ()=> {
    return(
        <div>
            <Welcome/>
            <BioMenus/>
            <AboutMe/>
            <FavouriteFood/>
            <LoadedFried/>
            <Contact/>
            <Food
                title="Pizza"
                path="/pizza.jpeg"
                alternative="ask shakti"
                bestTime ="Breaky"
                bestPlace="Pancakes on the Rocks"


            />
            <Food
                title="Quesadillas"
                path="/ques.jpeg"
                alternative="i ate quas so it is nothere"
                bestTime ="Afternoon Siesta"
                bestPlace="Mejico"
            />
            <Food
                title="IceCream Pan Cake"
                path="/pancake.jpg"
                alternative="i dont like pan cake so ask shakti"
                bestTime ="Breaky"
                bestPlace="Pancakes on the Rocks"
            />

        </div>
    ); 
};
ReactDOM.render(
    <App />,
    document.getElementById("root")
)