import React, { Component } from 'react';
import mole from '../images/mole.jpeg';


class Hole extends Component {
	render(){
		return (
			<div>
				<div className="dirt-bg dirt-1">
					<img src={mole} className="mole-img"/>
				</div>

				<div className="dirt-bg dirt-2">
					<img src={mole} className="mole-img"/>
				</div>

				<div className="dirt-bg dirt-3">
					<img src={mole} className="mole-img"/>
				</div>
			</div>
		)
	}
}


export default Hole;