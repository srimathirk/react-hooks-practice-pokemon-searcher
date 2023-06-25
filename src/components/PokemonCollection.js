import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({collections,onDelete}) {
  
  return (
    <Card.Group itemsPerRow={6}>
      {collections.map((card,index)=>(<PokemonCard key={index} card={card} onDelete={onDelete}/>))}
    </Card.Group>
  );
}

export default PokemonCollection;
