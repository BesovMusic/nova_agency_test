<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
		<div class="container">
			<select
				v-model="selectedValue"
				class="form-select"
				aria-label="Default select example"
				@change="valueSelected"
			>
				<option value="0" selected disabled hidden>
					Выберите поле
				</option>
				<option value="1">Название</option>
				<option value="2">Количество</option>
				<option value="3">Расстояние</option>
			</select>
			<select
				v-model="selectedCondition"
				class="form-select"
				aria-label="Default select example"
				@change="conditionSelected"
			>
				<option value="0" selected disabled hidden>
					Выберите условие
				</option>
				<option value="1">Равно</option>
				<option value="2">Содержит</option>
				<option value="3">Больше</option>
				<option value="4">Меньше</option>
			</select>
			<input
				type="text"
				class="form-control"
				placeholder="Введите значение"
				aria-label="Введите значение"
				aria-describedby="button-addon2"
				v-model="inputValue"
				@input="valueEntered"
			/>
		</div>
	</nav>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'Header',
	data() {
		return {
			inputValue: '',
			selectedValue: 0,
			selectedCondition: 0,
		};
	},
	methods: {
		...mapMutations([
			'SET_SELECTED_VALUE',
			'SET_SELECTED_CONDITION',
			'SET_INPUT_VALUE',
		]),
		valueSelected() {
			this.SET_SELECTED_VALUE(this.selectedValue);
		},
		conditionSelected() {
			this.SET_SELECTED_CONDITION(this.selectedCondition);
		},
		valueEntered() {
			this.SET_INPUT_VALUE(this.inputValue);
		},
	},
};
</script>
