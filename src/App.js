import { useState } from "react";

function App() {

  const [giphys, setGiphys] = useState([]);
  
  function handleOnCLick(searchText){
      console.log("call onClick Function");
      const api_path = "NF4A7l93qUNNp0C83adlXCAcDmdjjDDh";
      const limit = 8;
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_path}&q=${searchText}&limit=${limit}`)  
      .then(response => response.json())
      .then(result => {
          // console.log(`searcgText: ${searchText}`);
          // console.log(`All Giphys: ${JSON.stringify(result.data)}`);
          //return result.data;
          setGiphys(result.data);
          console.log(`Giphys Array: ${JSON.stringify(giphys)}`);
    })
  }

  return (
    <div className="App">
       
    </div>
  );
}

export default App;
