<template>
	<div class="container">
		<table class="table">
			<thead>
				<tr>
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
		...mapGetters(['INFO']),
		infoState() {
			let info = this.INFO;
			return info;
		},
	},
};
</script>
