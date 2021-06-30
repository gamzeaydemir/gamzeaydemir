import './App.css';
import { useState } from "react";

function App() {

  const [ name, setName ] =useState("Gamze");
  const [age, setAge]=useState(23);
  const [friends, setFriends]=useState(["Aslı","sümeyra"]);
  const [address,setAddress] =useState({title:"İstanbul",zip:2244});

  return (

    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

        <button onClick={() => setName("Sarp")}>change name</button>
        <br></br>
        <button onClick={() => setAge("25")}>change age</button>
            <hr/>
        <br></br>
      <h2>Friends</h2>
      {friends.map((friend,index) => (
            <div key={index}>{friend}</div>
        ))}

        <br/>
        <button onClick={() => setFriends([...friends,"Sarp"])}>add new friend</button>

        <hr/>
        <br></br>

        <h2>Address</h2>
        <div>{address.title} {address.zip}</div>

        <br/>
        <button onClick={() => setAddress({...address,title:"ankara",zip:4444})}>add new friend</button>

        <hr/>
    </div>

  );
}

export default App;
