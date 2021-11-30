<template>
	<tr>
		<th scope="row">{{ info.Date }}</th>
		<td>{{ info.Name }}</td>
		<td>{{ info.Quantity }}</td>
		<td>{{ info.Distance }}</td>
	</tr>
</template>

<script>
export default {
	name: 'TableRow',
	props: {
		info: {
			type: Object,
			default() {
				return {
					Date: '',
					Name: '',
					Quantity: '',
					Distance: '',
				};
			},
		},
	},
};
</script>
