import React from "react";

const Food = (props) => {

    return (
        <section id="IceCream">
            <h1>{props.title}</h1>
            <img src={props.path} alt={props.alternative}/>
            <p>Best time to eat: {props.bestTime}</p>
            <p>Best place: {props.bestPlace}</p>
        </section>
    );


}

export default Food;
