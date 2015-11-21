# React Thermometer

a simple thermometer style component for react

### Install
` npm install react-thermometer --save`

### Demo 
<a href="http://conorhastings.com/react-thermometer/demo/index.html">Click here</a>

### Required Props

#### `height`
pixel height of thermometer

#### `width`
pixel width of the thermometer (note base of thermometer = `width*2.5`)

#### `min`
the number to represent the lowest point on the thermometer, effectively the `0` point.

#### `max`
the number that represents your thermometer at 100% full

#### `current`
current position of thermometer

#### `fillColor`
the fill color of the thermometer.

#### `backgroundColor`
the background color of the thermometer.

### Use

```js
import React From "react";
import Thermometer from "react-thermometer";
const MyThermometer = () => {
	<div>
		<Thermometer
				min={0}
				max={30}
				width={20}
				height={300}
				backgroundColor={'blue'}
				fillColor={'green'}
				current={10}
		/>
	</div>	
}
```