<template>
	<transition name="component-fade" mode="out-in">
		<div
			v-if="this.loadingState"
			class="d-flex justify-content-center align-items-center loaderWrapper"
			style="height: 100vh"
		>
			<div
				class="spinner-grow text-info"
				style="width: 150px; height: 150px"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Loader',
	computed: {
		...mapGetters(['loadingState']),
	},
};
</script>

<style lang="scss">
.loaderWrapper {
	position: absolute;
	height: 100vh;
	width: 100%;
	background-color: #fff;
	z-index: 2;
}
.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity 0.5s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
	opacity: 0;
}
</style>
