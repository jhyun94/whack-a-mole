import React, { Component } from 'react';

import Hole from './hole';



class Field extends Component {
	constructor(props){
		super(props)

	}
	render(){
		return (
			<div className="field-bg">
				<div className="text-center py-3">
					<h3>SCORE: {this.props.score}</h3>
				</div>
				<Hole />
			</div>
		)
	}
}

export default Field;