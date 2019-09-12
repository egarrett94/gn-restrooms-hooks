import React, { useContext } from 'react';
import { AppContext } from '../App';

function TestComponent() {
	const { state, dispatch } = useContext(AppContext);
	const whatStyle = {
		padding: 0,
		backgroundColor: state.color,
	};

	return (
		<div style={whatStyle}>
			<h4>hey</h4>
			<button
				onClick={() => {
					dispatch({ type: 'colorSwitch', payload: state.color });
				}}
			></button>
		</div>
	);
}

export default TestComponent;
