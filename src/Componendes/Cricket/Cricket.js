import React from 'react';

const Cricket = (props) => {
   const{name,salary,country,picture} = props.cricket;
   const pictureStyle= {height:'300px'}
    const cricketStyle = {border: '1px solid black', margin:'10px', padding:'10ox'}
    const handleAddCricket= props.handleAddCricket;

   return (
       <div style={cricketStyle}>
           <h4 className="player">This is {name}</h4>
           <img style={pictureStyle} src={picture} alt=""/>
           <p>salary: {salary}</p>
           <p><small>Nationality: {country}</small></p>
           <button className="main-button"
           onClick={ () => handleAddCricket(props.cricket)}>Add Cricket Member</button>
           
       </div>
   );    


};

export default Cricket;