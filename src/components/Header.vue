<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
		<div class="container">
			<select class="form-select" aria-label="Default select example">
				<option selected disabled hidden>Выберите поле</option>
				<option value="1">Название</option>
				<option value="2">Количество</option>
				<option value="3">Расстояние</option>
			</select>
			<select class="form-select" aria-label="Default select example">
				<option selected disabled hidden>Выберите условие</option>
				<option value="1">Равно</option>
				<option value="2">Содержит</option>
				<option value="3">Больше</option>
				<option value="4">Меньше</option>
			</select>
			<div class="input-group">
				<input
					type="text"
					class="form-control"
					placeholder="Введите значение"
					aria-label="Введите значение"
					aria-describedby="button-addon2"
				/>
				<button
					class="btn btn-success"
					type="button"
					id="button-addon2"
				>
					Найти
				</button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Header',
};
</script>
