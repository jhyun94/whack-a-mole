import React, { Component } from 'react';
import mole from '../images/mole.jpeg';


function Hole(props) {
	const holeClass = `dirt-bg dirt-${props.holeNumber} text-center`;
	const moleClass = `mole-img in-ground ${props.mole ? 'pop' : ''}`;

	if (props.mole){
		setTimeout( () =>{
			props.sendNumber(props.holeNumber)
		}, 500)
	}

	return (
		<div className={holeClass}>
			<img src={mole} className={moleClass}/>
		</div>
	)
}


export default Hole;
