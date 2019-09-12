import React, { useEffect, useReducer } from 'react';
import TestComponent from './components/TestComponent.js';
import appReducer from './reducer.js';

export const AppContext = React.createContext();

function App() {
	const initialState = { color: 'red' };
	const [state, dispatch] = useReducer(appReducer, initialState);

	const headerStyle = {
		color: state.color,
		fontFamily: 'Helvetica',
	};

	useEffect(() => {
		console.log('did it!"');
	}, [state.color]);

	return (
		<AppContext.Provider className="App" value={{ state, dispatch }}>
			<TestComponent />
			<header className="App-header">
				<h2 style={headerStyle}> color: {state.color} </h2>
				<br />
				<br />
				<button
					onClick={() => {
						dispatch({ type: 'colorSwitch', payload: state.color });
					}}
				>
					Clicky
				</button>
			</header>
		</AppContext.Provider>
	);
}

export default App;
