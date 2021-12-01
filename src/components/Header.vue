<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
		<div class="container">
			<select v-model="selectedValue" class="form-select">
				<option disabled hidden value="0">Выберите поле</option>
				<option
					v-for="value in selectorValues"
					:key="value.value"
					:value="value.value"
				>
					{{ value.name }}
				</option>
			</select>
			<select v-model="selectedCondition" class="form-select">
				<option value="0" disabled hidden>Выберите условие</option>
				<option
					v-for="condition in selectorConditions"
					:key="condition.value"
					:value="condition.value"
				>
					{{ condition.name }}
				</option>
			</select>
			<input
				type="text"
				class="form-control"
				placeholder="Введите значение"
				v-model="searchValue"
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
			searchValue: '',
			selectedValue: 0,
			selectedCondition: 0,
			selectorValues: [
				{ name: 'Название', value: '1' },
				{ name: 'Количество', value: '2' },
				{ name: 'Расстояние', value: '3' },
			],
			selectorConditions: [
				{ name: 'Равно', value: '1' },
				{ name: 'Содержит', value: '2' },
				{ name: 'Больше', value: '3' },
				{ name: 'Меньше', value: '4' },
			],
		};
	},
	methods: {
		...mapMutations([
			'setSelectedValue',
			'setSelectedCondition',
			'setSearchValue',
		]),
	},
	watch: {
		searchValue(newValue) {
			this.setSearchValue(newValue);
		},
		selectedValue(newValue) {
			this.setSelectedValue(newValue);
		},
		selectedCondition(newValue) {
			this.setSelectedCondition(newValue);
		},
	},
};
</script>
