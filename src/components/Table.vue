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
			'info',
			'selectedValue',
			'inputValue',
			'selectedCondition',
		]),
		infoState() {
			return this.info.filter((elem) => {
				let value = '';
				if (
					this.inputValue === '' ||
					this.selectedValue == 0 ||
					this.selectedCondition == 0
				) {
					return this.info;
				}
				if (this.selectedValue == 1) {
					value = elem.Name.toLowerCase();
				}
				if (this.selectedValue == 2) {
					value = elem.Quantity;
				}
				if (this.selectedValue == 3) {
					value = elem.Distance;
				}

				if (this.selectedCondition == 1) {
					return value == this.inputValue.toLowerCase();
				}
				if (this.selectedCondition == 2) {
					return String(value).includes(
						this.inputValue.toLowerCase()
					);
				}
				if (this.selectedCondition == 3) {
					return value > this.inputValue.toLowerCase();
				}
				if (this.selectedCondition == 4) {
					return value < this.inputValue.toLowerCase();
				}
			});
		},
	},
};
</script>
