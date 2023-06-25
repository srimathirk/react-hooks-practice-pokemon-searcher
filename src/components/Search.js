import React,{useState} from "react";

function Search({searchValue}) {
  const[search,setSearch]=useState("");
  function handleSearch(e){
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  function handleSearchSubmit(e){
    e.preventDefault();
    
    searchValue(search)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <form onSubmit={handleSearchSubmit}>
        <input className="prompt" type="text" value={search} onChange={handleSearch} />
        <button><i className="search icon" /></button>
        </form>
      </div>
    </div>
  );
}

export default Search;
