<template>
	<Header />
	<Table />
</template>

<script>
import Header from './components/Header.vue';
import Table from './components/Table.vue';

export default {
	name: 'App',
	components: {
		Header,
		Table,
	},
	data() {
		return {};
	},
	created() {
		this.$store.dispatch('GET_INFO_FROM_API');
	},
};
</script>

<style lang="scss">
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
