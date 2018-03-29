import React, { Component } from 'react';
import mole from '../images/mole.jpeg';


class Hole extends Component {
	render(){
		return (
			<div>
				<div className="dirt-bg dirt-1 text-center">
					<img src={mole} className="mole-img in-ground"/>
				</div>

				<div className="dirt-bg dirt-2 text-center">
					<img src={mole} className="mole-img in-ground"/>
				</div>

				<div className="dirt-bg dirt-3 text-center">
					<img src={mole} className="mole-img in-ground"/>
				</div>
			</div>
		)
	}
}


export default Hole;