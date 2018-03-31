import React from 'react';
export default function PlayButton(props) {

	if(props.show){
		return null;
	}
	
	return (
		<div>
			<button>Play</button>
		</div>
	)
}