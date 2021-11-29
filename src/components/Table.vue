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
				<TableRow />
			</tbody>
		</table>
	</div>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
	name: 'Table',
	components: {
		TableRow,
	},
};
</script>
