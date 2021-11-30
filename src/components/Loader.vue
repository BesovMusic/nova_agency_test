<template>
	<div
		class="d-flex justify-content-center align-items-center"
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
</template>

<script>
export default {
	name: 'Loader',
};
</script>
