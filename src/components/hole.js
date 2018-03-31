import React, { Component } from 'react';
import mole from '../images/mole.jpeg';


function Hole(props) {
	const holeClass = `dirt-bg dirt-${props.holeNumber} text-center`;
	const moleClass = `mole-img in-ground ${props.mole ? 'pop' : ''}`;
	return (
		<div className={holeClass}>
			<img src={mole} className={moleClass}/>
		</div>
	)
}


export default Hole;
