import React, { Component } from 'react';
import { render } from 'react-dom';
import Thermometer from '../dist/index';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 0,
			max: 50,
			width: 20,
			height: 300,
			backgroundColor: '#BDC0BA',
			fillColor: '#D0104C',
			current: 30
		}
	}

	render() {
		return (
			<div style={{marginLeft: "20%", fontFamily: "Helvetica"}}>
			<div>
				<h1>React Thermometer</h1>
				<h3>Edit props with input below</h3>
			</div>
			<div style={{float: 'right', marginRight: '70%', marginTop: 20}}>
				{Object.keys(this.state).map((key) => {
					return (
						<div key={key} style={{marginBottom: 10}}>
							<label>{key}</label><br />
							<input 
								onChange={(e) => this.setState({[key]: e.target.value})} 
								value={this.state[key]}
							/>
					</div>
					);
				})}
			</div>
				<Thermometer
					min={this.state.min}
					max={this.state.max}
					width={this.state.width}
					height={this.state.height}
					backgroundColor={this.state.backgroundColor}
					fillColor={this.state.fillColor}
					current={this.state.current}
				/>
			</div>
		);
	}
}

render(<Demo />, document.getElementById('app'));