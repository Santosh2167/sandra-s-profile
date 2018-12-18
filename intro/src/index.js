import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./aboutMe";
import Welcome from "./welcome";
import BioMenus from "./bioMenus";
import FavouriteFood from "./favouriteFood";
import Contact from "./contact";
import Food from "./food";

const App = ()=> {
    return(
        <div>
            <Welcome/>
            <BioMenus/>
            <AboutMe
                facts={[
                    "Pop culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist.",
                    "Friendly web maven. Bacon lover. General internet specialist. Incurable travel scholar.",
                    "Subtly charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.",
                    "Unable to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist" 
                ]}
            
            />
            <FavouriteFood/>
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
            <Food
                title="IceCream Pan Cake"
                path="/pancake.jpg"
                alternative="i dont like pan cake so ask shakti"
                bestTime ="Breaky"
                bestPlace="Pancakes on the Rocks"
            />
            <Food
                title="Loaded Fries"
                path="lf.jpg"
                alternative="loaded fries"
                bestTime ="During the game"
                bestPlace="My House"
            />
        </div>
    ); 
};
ReactDOM.render(
    <App />,
    document.getElementById("root")
)