import React from "react";
import Welcome from "./welcome";
import BioMenus from "./bioMenus";
import AboutMe from "./aboutMe";
import FavouriteFood from "./favouriteFood"; 
import Pizza from "./pizza";
import Quesadillas from "./ques";
import IceCream from "./iceCream";
import LoadedFried from "./loadedFried";
import ContactDetail from "./contact";

const App = ()=> {
    return(
        <div>
            <Welcome/>
            <BioMenus/>
            <AboutMe/>
            <FavouriteFood/>
            <Pizza/>
            <Quesadillas/>
            <LoadedFried/>
            <ContactDetail/>
        </div>
    ); 
};

export default App;

