import { createSlice } from '@reduxjs/toolkit';

export const avSlice = createSlice({
	name: 'av',
	initialState: [
		{
			img: 'mariakray-projector-6760348_1920.jpg',
			name: 'Projectors',
			cost: 200,
			quantity: 0
		},
		{
			img: 'cloudlynx-soundboks-4831439_1920.jpg',
			name: 'Speaker',
			cost: 35,
			quantity: 0
		},
		{
			img: 'clickerhappy-mic-1132528_1920.jpg',
			name: 'Microphones',
			cost: 45,
			quantity: 0
		},
		{
			img: 'jraffin-whiteboard-2170530_1920.jpg',
			name: 'Whiteboards',
			cost: 80,
			quantity: 0
		},

		{
			img: 'stephen_uk-exhibition-5052522_1920.jpg',
			name: 'Signage',
			cost: 80,
			quantity: 0
		}
	],

	reducers: {
		incrementAvQuantity: (state, action) => {
			const item = state[action.payload];
			if (item) {
				item.quantity++;
			}
		},
		decrementAvQuantity: (state, action) => {
			const item = state[action.payload];
			if (item && item.quantity > 0) {
				item.quantity--;
			}
		}
	}
});

export const {incrementAvQuantity, decrementAvQuantity} = avSlice.actions;

export default avSlice.reducer;
