import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  function searchUpdate(term) {
    setSearchTerm(term)
  }

  return (
    <div className="app">
      <Header handleSearch={searchUpdate}/>
      <ListingsContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
