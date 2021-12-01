export default class Row {
	constructor(data = {}) {
		this.Date = '';
		this.Name = '';
		this.Quantity = '';
		this.Distance = '';

		this.fill(data);
	}

	fill(data = {}) {
		for (const fieldName in data) {
			const value = data[fieldName];
			this[fieldName] = value;
		}
	}
}
