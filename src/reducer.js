export default function appReducer(state, action) {
	switch (action.type) {
		case 'colorSwitch':
			let newColor;
			if (action.payload === 'red') {
				newColor = 'blue';
			} else {
				newColor = 'red';
			}
			return { ...state, color: newColor };
		default:
			return state;
	}
}
