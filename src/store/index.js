import { createStore } from 'vuex';
import axios from 'axios';
import Row from '../DTO/Row';

// Константы для фильтрации в таблице
export const SELECT_NAME = 1;
export const SELECT_QUANTITY = 2;
export const SELECT_DISTANCE = 3;

export const CONDITION_EQUAL = 1;
export const CONDITION_INCLUDES = 2;
export const CONDITION_MORE = 3;
export const CONDITION_LESS = 4;

const key =
	'SkX2ljBYF7CQVVU4S1JApyALJ3EPYHjjFTVVRg4w3SiKBNeD-yVS0aLwXYuFln5d0v9pyqVqs9wYudAPFyzjC1mkbYAy8-63m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIVlT1SdR4xGTwHbwkRtpBYyV1ZUbm5q_f785Rxbgf5_3ZvMh5Jp9PjmkkWItDkfkXs5RvJXJm8CKiquYpwjtXu5BPxo4khIoA';
const lib = 'MF3UW--1wUWEuxA8qt05dsq9CoS8oh-MD';

export default createStore({
	state: {
		rows: [],
		searchValue: '',
		selectedValue: 0,
		selectedCondition: 0,
		loading: true,
	},
	getters: {
		rows(state) {
			return state.rows;
		},
		searchValue(state) {
			return state.searchValue;
		},
		selectedValue(state) {
			return state.selectedValue;
		},
		selectedCondition(state) {
			return state.selectedCondition;
		},
		loadingState(state) {
			return state.loading;
		},
	},
	mutations: {
		setrowsToState: (state, rows) => {
			state.rows = rows;
		},
		setSelectedValue: (state, value) => {
			state.selectedValue = value;
		},
		setSelectedCondition: (state, condition) => {
			state.selectedCondition = condition;
		},
		setSearchValue: (state, value) => {
			state.searchValue = value;
		},
		setLoadingEnd: (state) => {
			state.loading = false;
		},
	},
	actions: {
		GET_ROWS_FROM_API({ commit }) {
			let url = new URL(
				'https://script.googleusercontent.com/macros/echo'
			);
			url.searchParams.set('user_content_key', key);
			url.searchParams.set('lib', lib);
			axios
				.get(url)
				.then((response) => {
					const projects = response.data.projects.map(function (
						item
					) {
						return new Row(item);
					});
					commit('setrowsToState', projects);
				})
				.catch(console.log)
				.finally(() => {
					commit('setLoadingEnd');
				});
		},
	},
});
