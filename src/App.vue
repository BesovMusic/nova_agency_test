<template>
	<Loader />
	<Header />
	<div class="container">
		<Table />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import Loader from './components/Loader.vue';

export default {
	name: 'App',
	components: {
		Header,
		Table,
		Loader,
	},
	created() {
		this.$store.dispatch('GET_ROWS_FROM_API');
	},
};
</script>
