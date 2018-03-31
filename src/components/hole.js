import React, { Component } from 'react';
import mole from '../images/mole.jpeg';


function Hole(props) {
	const className = `dirt-bg dirt-${props.holeNumber} text-center`;
	return (
		<div className={className}>
			<img src={mole} className='mole-img in-ground'/>
		</div>
	)
}


export default Hole;
