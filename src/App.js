import React, { useEffect, useReducer, useRef } from 'react';
import TestComponent from './components/TestComponent.js';
import Map from './components/Map.js';
import appReducer from './reducer.js';

export const AppContext = React.createContext();

function App() {
	const initialState = { color: 'turquoise' };
	const [state, dispatch] = useReducer(appReducer, initialState);

	const didRun = useRef(false);

	useEffect(() => {
		if (!didRun.current) {
			const rawData = localStorage.getItem('data');
			dispatch({ type: 'RETRIEVE_FROM_LOCAL', payload: JSON.parse(rawData) });
			didRun.current = true;
		}
	});

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(state));
	}, [state]);

	const headerStyle = {
		color: state.color,
		fontFamily: 'Helvetica',
	};

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<TestComponent />
			<Map />
			<header className="App-header">
				<h2 style={headerStyle}> color: {state.color} </h2>
				<br />
				<br />
				<button
					onClick={() => {
						dispatch({ type: 'COLOR_SWITCH', payload: state.color });
					}}
				>
					Clicky
				</button>
			</header>
		</AppContext.Provider>
	);
}

export default App;
