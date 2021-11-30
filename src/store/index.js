import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		info: [],
		inputValue: '',
		selectedValue: 0,
		selectedCondition: 0,
		loading: true,
	},
	getters: {
		INFO(state) {
			return state.info;
		},
		INPUT_VALUE(state) {
			return state.inputValue;
		},
		SELECTED_VALUE(state) {
			return state.selectedValue;
		},
		SELECTED_CONDITION(state) {
			return state.selectedCondition;
		},
	},
	mutations: {
		SET_INFO_TO_STATE: (state, info) => {
			state.info = info;
			state.loading = false;
		},
		SET_SELECTED_VALUE: (state, value) => {
			state.selectedValue = value;
		},
		SET_SELECTED_CONDITION: (state, condition) => {
			state.selectedCondition = condition;
		},
		SET_INPUT_VALUE: (state, value) => {
			state.inputValue = value;
		},
	},
	actions: {
		GET_INFO_FROM_API({ commit }) {
			axios
				.get(
					'https://script.googleusercontent.com/macros/echo?user_content_key=SkX2ljBYF7CQVVU4S1JApyALJ3EPYHjjFTVVRg4w3SiKBNeD-yVS0aLwXYuFln5d0v9pyqVqs9wYudAPFyzjC1mkbYAy8-63m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIVlT1SdR4xGTwHbwkRtpBYyV1ZUbm5q_f785Rxbgf5_3ZvMh5Jp9PjmkkWItDkfkXs5RvJXJm8CKiquYpwjtXu5BPxo4khIoA&lib=MF3UW--1wUWEuxA8qt05dsq9CoS8oh-MD'
				)
				.then((info) => {
					commit('SET_INFO_TO_STATE', info.data.projects);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
});
