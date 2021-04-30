import logo from './logo.svg';
import './App.css';
import teamData from './Data/Data.json'
import { useEffect, useState } from 'react';
import Cricket from './Componendes/Cricket/Cricket';
import Carts from './Componendes/Carts/Carts';
import { Navbar } from 'react-bootstrap';



function App() {
  const [team, setTeam ] = useState([]);
  const [cart, setCart ] = useState([]);
  useEffect (() => {
    setTeam(teamData);
    console.log(teamData);
    const names = teamData.map(cricket => cricket.name)
    console.log(names);
  },[] )

  const handleAddCricket = (cricket) => 
  {
    const newCart = [...cart, cricket];
    setCart(newCart);
  }

  return (
    <div className="App">
     <Navbar/>
       <h1>Total Team Member: {team.length}</h1>
       <h4>Member Added: {cart.length}</h4>
       <Carts cart={cart}> </Carts>
       <ul>
         {
           
            team.map(cricket => <Cricket cricket={cricket}  handleAddCricket={handleAddCricket}>{cricket.name} </Cricket>)
         }
       </ul>
    </div>
  );
}

export default App;
