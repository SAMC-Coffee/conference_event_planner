// venueSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const venueSlice = createSlice({
	name: 'venue',
	initialState: [
		{
			img: 'stocksnap-table-2577998_1920.jpg',
			name: 'Conference Room (Capacity:15)',
			cost: 3500,
			quantity: 0
		},
		{
			img: '12019-auditorium-86197_1920.jpg',
			name: 'Auditorium Hall (Capacity:200)',
			cost: 5500,
			quantity: 0
		},
		{
			img: 'franlober53-living-room-2174142_1920.jpg',
			name: 'Presentation Room (Capacity:50)',
			cost: 700,
			quantity: 0
		},
		{
			img: 'websubs-iocenters-2673327_1920.jpg',
			name: 'Large Meeting Room (Capacity:10)',
			cost: 900,
			quantity: 0
		},
		{
			img: 'pexels-chairs-2181960_1920.jpg',
			name: 'Small Meeting Room (Capacity:5)',
			cost: 1100,
			quantity: 0
		}
	],
	reducers: {
		incrementQuantity: (state, action) => {
			const {payload: index} = action;
			if (state[index]) {
				if (
					state[index].name === ' Auditorium Hall (Capacity:200)' &&
					state[index].quantity >= 3
				) {
					return;
				}
				state[index].quantity++;
			}
		},
		decrementQuantity: (state, action) => {
			const {payload: index} = action;
			if (state[index] && state[index].quantity > 0) {
				state[index].quantity--;
			}
		}
	}
});

export const {incrementQuantity, decrementQuantity} = venueSlice.actions;

export default venueSlice.reducer;
