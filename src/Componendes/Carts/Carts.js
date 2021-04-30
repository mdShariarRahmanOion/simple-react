import React from 'react';
import Cricket from '../Cricket/Cricket';

const Carts = (props) => {
    const cart = props.cart;
    const cartstStyle = {border: '1px solid black', margin:'5px', padding:'5pxx'}
    
 const totalSalary = cart.reduce((total, cricket) => total + cricket.salary, 0)
    return (
        <div style={cartstStyle}>
            <h2>Added Player: {cart.length}</h2>
            <p>Total salary: {totalSalary}</p>
        </div>
    );
};

export default Carts;