import React from 'react';
export default function Score(props){

	return (
		<div className="text-center">
			<h3>Score: {props.score}</h3>
		</div>
	)
}