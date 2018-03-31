import React from 'react';
export default function Score(props){

	return (
		<div className="pt-4">
			<h3 className="float-left pl-4">Best Score: {props.bestScore}</h3>
			<h3 className="float-right pr-4">Score: {props.score}</h3>
			<div className="clearfix"></div>
		</div>
	)
}