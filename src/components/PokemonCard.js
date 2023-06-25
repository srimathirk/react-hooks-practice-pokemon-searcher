import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card, onDelete}) {
  const{name,hp,sprites} = card

  function handleDeleteClick() {
    fetch(`http://localhost:3001/pokemon/$(id)`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => onDelete(card));
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprites.front} alt=""/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp  }
            <button onClick={handleDeleteClick}> X </button>
          </span>
          
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
