import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (args) => {
    const style ={
            '@media (min-width = 500px)':{
                width: '450px'
            }
        }

    return (
        <div className = 'body' style = {style}>
            <p onClick = {args.click} >I'm {args.name} and I am {args.age} years old.</p>
            <p>{args.children}</p>
            <input onChange = {args.changed} value ={args.name} ></input>
        </div>
    );
};

export default Radium(person);

