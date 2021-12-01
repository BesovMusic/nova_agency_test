<template>
	<tr>
		<th scope="row">{{ row.Date }}</th>
		<td>{{ row.Name }}</td>
		<td>{{ row.Quantity }}</td>
		<td>{{ row.Distance }}</td>
	</tr>
</template>

<script>
import Row from '../DTO/Row';

export default {
	name: 'TableRow',
	props: {
		row: {
			type: Row,
			default() {
				return new Row();
			},
		},
	},
};
</script>
