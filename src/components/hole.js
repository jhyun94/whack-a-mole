import React from 'react';
import mole from '../images/mole.png';


function Hole(props) {
	const holeClass = `dirt-bg dirt-${props.holeNumber} text-center`;
	const moleClass = `mole-img in-ground ${props.mole ? 'pop' : ''}`;

	if (props.mole){
		setTimeout( () =>{
			props.sendNumber(props.holeNumber)
		}, 900)
	}

	return (
		<div className={holeClass}>
			<img src={mole} className={moleClass} onClick={props.onMoleSmack}/>
		</div>
	)
}


export default Hole;
