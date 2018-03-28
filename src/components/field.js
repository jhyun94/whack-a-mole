import React, { Component } from 'react';

import Hole from './hole';



class Field extends Component {

	render(){
		return (
			<div className="field-bg">
				<Hole />
			</div>
		)
	}
}

export default Field;