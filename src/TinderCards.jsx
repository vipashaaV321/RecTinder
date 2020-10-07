import { Person } from "@material-ui/icons";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import data from './data'
const TinderCards = () => {
  const [people, setPeople] = useState(
data
  );
  const swiped = (direction, nameToDelete) => {
    console.log("You swiped: " + nameToDelete);
    // setLastDirection(direction)
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((character) => (
          <>
            {/* <h1>{person.name}</h1>
                <img src={person.url}/> */}
            <TinderCard
              className="swipe"
              key={character.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${ character.url})`}}
                className="card"
              >
                   <h1 style={{color:"#fff"}}>{character.name}</h1>
              {/* <img src={character.url}/> */}
              </div>
            </TinderCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
