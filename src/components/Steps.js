import React from "react";
import '../App.css'

function Steps(props) {
  return (
    <section className="SD">
     <div className="card1">
          <div className="cardImg1">
               <img src="https://tinywow.com/v2/img/print.png"></img>
          </div>
          <div className="cardContent">
               <section className="Title">Steps</section>
               <section className="Description text-black">
                    {props.steps}
               </section>
          </div>
     </div>
    </section>
  );
}

export default Steps