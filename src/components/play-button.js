import React from 'react';
export default function PlayButton(props) {

	if(props.play){
		return null;
	}

	return (
		<div className="text-center play-btn-container">
			<button 
				onClick={props.onButtonClick}
				className="btn btn-primary btn-lg">
				Play {props.finished ? 'Again' : ''}
			</button>
		</div>
	)
}