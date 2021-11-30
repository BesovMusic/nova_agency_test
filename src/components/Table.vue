<template>
	<div class="container">
		<table class="table table-bordered shadow-sm">
			<thead>
				<tr class="table-warning">
					<th scope="col">Дата</th>
					<th scope="col">Название</th>
					<th scope="col">Количество</th>
					<th scope="col">Расстояние</th>
				</tr>
			</thead>
			<tbody>
				<TableRow
					v-for="(info, index) in infoState"
					:key="index"
					:info="info"
				/>
			</tbody>
		</table>
	</div>
</template>

<script>
import TableRow from './TableRow.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'Table',
	components: {
		TableRow,
	},
	computed: {
		...mapGetters([
			'INFO',
			'SELECTED_VALUE',
			'INPUT_VALUE',
			'SELECTED_CONDITION',
		]),
		infoState() {
			return this.INFO.filter((elem) => {
				let value = '';
				if (this.INPUT_VALUE === '') {
					return this.INFO;
				}
				if (this.SELECTED_VALUE == 1 && this.SELECTED_CONDITION == 1) {
					value = elem.Name;
					return (
						value.toLowerCase() === this.INPUT_VALUE.toLowerCase()
					);
				}
				if (this.SELECTED_VALUE == 1 && this.SELECTED_CONDITION == 2) {
					value = elem.Name;
					return value
						.toLowerCase()
						.includes(this.INPUT_VALUE.toLowerCase());
				}
				if (this.SELECTED_VALUE == 1 && this.SELECTED_CONDITION == 3) {
					value = elem.Name;
					return value.toLowerCase() > this.INPUT_VALUE.toLowerCase();
				}
				if (this.SELECTED_VALUE == 1 && this.SELECTED_CONDITION == 4) {
					value = elem.Name;
					return value.toLowerCase() < this.INPUT_VALUE.toLowerCase();
				}
				//Фильтрация для колличества
				if (this.SELECTED_VALUE == 2 && this.SELECTED_CONDITION == 1) {
					value = elem.Quantity;
					return value === this.INPUT_VALUE.toLowerCase();
				}
				if (this.SELECTED_VALUE == 2 && this.SELECTED_CONDITION == 2) {
					value = elem.Quantity;
					return String(value).includes(this.INPUT_VALUE);
				}
				if (this.SELECTED_VALUE == 2 && this.SELECTED_CONDITION == 3) {
					value = elem.Quantity;
					return value > this.INPUT_VALUE.toLowerCase();
				}
				if (this.SELECTED_VALUE == 2 && this.SELECTED_CONDITION == 4) {
					value = elem.Quantity;
					return value < this.INPUT_VALUE.toLowerCase();
				}
				//Фильтрация для расстояния
				if (this.SELECTED_VALUE == 3 && this.SELECTED_CONDITION == 1) {
					value = elem.Distance;
					return value === this.INPUT_VALUE.toLowerCase();
				}
				if (this.SELECTED_VALUE == 3 && this.SELECTED_CONDITION == 2) {
					value = elem.Distance;
					return String(value).includes(this.INPUT_VALUE);
				}
				if (this.SELECTED_VALUE == 3 && this.SELECTED_CONDITION == 3) {
					value = elem.Distance;
					return value > this.INPUT_VALUE.toLowerCase();
				}
				if (this.SELECTED_VALUE == 3 && this.SELECTED_CONDITION == 4) {
					value = elem.Distance;
					return value < this.INPUT_VALUE.toLowerCase();
				}
			});
		},
	},
};
</script>
