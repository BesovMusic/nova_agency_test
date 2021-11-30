<template>
	<transition name="component-fade" mode="out-in">
		<Loader v-if="this.$store.getters.loadingState" />
		<div class="page" v-else>
			<Header />
			<Table />
		</div>
	</transition>
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
		this.$store.dispatch('GET_INFO_FROM_API');
	},
};
</script>

<style lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity 0.5s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
	opacity: 0;
}
</style>
