import React, { Component } from 'react';


let birthday = new Date(1986,0,26);
let today =  Date.now();


console.log(birthday, today);

class SolCount extends Component {
    render() { 
        return ( <h1>Sol</h1> );
    }
}
 
export default SolCount;