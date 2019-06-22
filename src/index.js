// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = 'Click me';

	return (
		<div>
			<label htmlFor="name">Enter name</label>
			<input type="text" id="name" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{buttonText}
			</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
