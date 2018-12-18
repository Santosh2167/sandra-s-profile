 import React from "react";

    const AboutMe = (props) => {
        const UpdateList = props.facts.map((item)=><li>{item}</li>);
        
        return(
            <div>
            <section id="#AboutMe">
                 <h1>About Me</h1>
                 <img src="Sandra.jpg" alt="Sandra Photo Not loading why"/>
                <div>
                    
                       <ul>

                           {UpdateList}
                       </ul>
                    
                   
                 </div>
     
            </section>
            </div>   
        ); 
    }

  export default AboutMe;