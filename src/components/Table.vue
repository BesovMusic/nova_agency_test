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
				v-for="(row, index) in displayedRows"
				:key="index"
				:row="row"
			/>
		</tbody>
	</table>
	<nav>
		<ul class="pagination">
			<li
				v-for="(pageNumber, index) in pages"
				:key="index"
				:class="{ active: page == pageNumber }"
				class="page-item"
				aria-current="page"
				@click="page = pageNumber"
			>
				<span class="page-link">{{ pageNumber }}</span>
			</li>
		</ul>
	</nav>
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
	data() {
		return {
			page: 1,
			perPage: 7,
			pages: [],
		};
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
		displayedRows() {
			return this.paginate(this.filteredRows);
		},
	},
	methods: {
		setPages() {
			this.pages.splice(0);
			let numberOfPages = Math.ceil(
				this.filteredRows.length / this.perPage
			);
			for (let i = 1; i <= numberOfPages; i++) {
				this.pages.push(i);
			}
		},
		paginate(rows) {
			let page = this.page;
			let perPage = this.perPage;
			let from = page * perPage - perPage;
			let to = page * perPage;
			return rows.slice(from, to);
		},
	},
	watch: {
		filteredRows() {
			this.setPages();
			this.page = 1;
		},
	},
};
</script>
