import React ,{useState,useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [collections,setCollections] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`).then((r)=>r.json()).then((pokemon)=>{setCollections(pokemon)})
  },[])
  function searchValue(search){
    setCollections(collections.filter((card)=>(card.name.toLowerCase().includes(search))))
  }
  function handleAddCollection(newCollection){
    setCollections([...collections,newCollection])
  }
  function handleDeleteCard(deletedCard){
    const updatedCard = collections.filter((card)=>card.id !== deletedCard.id);
    setCollections(updatedCard)
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAdd={handleAddCollection} />
      <br />
      <Search searchValue={searchValue}/>
      <br />
      <PokemonCollection collections={collections} onDelete={handleDeleteCard} />
    </Container>
  );
}

export default PokemonPage;
