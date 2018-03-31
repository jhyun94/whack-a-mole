import React from 'react';
export default function PlayButton(props) {

	if(props.play){
		return null;
	}

	return (
		<div>
			<button onClick={props.onButtonClick}>Play {props.finished ? 'Again' : ''}</button>
		</div>
	)
}