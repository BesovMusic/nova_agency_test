<template>
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
				v-for="(row, index) in filteredRows"
				:key="index"
				:row="row"
			/>
		</tbody>
	</table>
</template>

<script>
import TableRow from './TableRow.vue';
import { mapGetters } from 'vuex';
import {
	SELECT_NAME,
	SELECT_QUANTITY,
	SELECT_DISTANCE,
	CONDITION_EQUAL,
	CONDITION_INCLUDES,
	CONDITION_MORE,
	CONDITION_LESS,
} from '../store/index';

export default {
	name: 'Table',
	components: {
		TableRow,
	},
	computed: {
		...mapGetters([
			'rows',
			'selectedValue',
			'searchValue',
			'selectedCondition',
		]),
		isDefaultSelected() {
			return (
				!this.searchValue ||
				!this.selectedValue ||
				!this.selectedCondition
			);
		},
		filteredRows() {
			if (this.isDefaultSelected) {
				return this.rows;
			}
			return this.rows.filter((row) => {
				const selectedValue = Number(this.selectedValue);
				const selectedCondition = Number(this.selectedCondition);
				const searchValue = this.searchValue.toLowerCase();
				let value = '';

				// Преобразуем поисковые данные в один формат
				switch (selectedValue) {
					case SELECT_NAME:
						value = row.Name.toLowerCase();
						break;
					case SELECT_QUANTITY:
						value = row.Quantity;
						break;
					case SELECT_DISTANCE:
						value = row.Distance;
						break;
				}

				switch (selectedCondition) {
					case CONDITION_EQUAL:
						return value == searchValue;
					case CONDITION_INCLUDES:
						return String(value).includes(searchValue);
					case CONDITION_MORE:
						return value > searchValue;
					case CONDITION_LESS:
						return value < searchValue;
				}
			});
		},
	},
};
</script>
