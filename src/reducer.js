export default function appReducer(state, action) {
	switch (action.type) {
		case 'COLOR_SWITCH':
			let newColor;
			if (action.payload === 'turquoise') {
				newColor = 'olive';
			} else {
				newColor = 'turquoise';
			}
			return { ...state, color: newColor };
		case 'RETRIEVE_FROM_LOCAL':
			return action.payload;
		case 'test':
			return { ...state, newValue: 'new' };
		default:
			return state;
	}
}
