new Vue({

	el: '#app',
	data: {
		import: [],
		filter: '',
		titleText: 'from Breaking bad',
		filters: ['characters', 'episodes', 'quotes', 'deaths'],
	},

	methods: {
		//Update API
		setFilter: function (filter) {
			this.filter = filter.toLowerCase();
			axios
				.get('https://www.breakingbadapi.com/api/' + filter)
				.then(response => (this.import = response.data))
		},

		orderNameAsc: function () {
			let imported = this.import;

			return imported
				.sort(function (a, b) {
					return a.author.localeCompare(b.author);
				});
		},

		//Get API once
		created() {
			axios
				.get('https://www.breakingbadapi.com/api/quotes')
				.then(response => (this.import = response.data))
		},


	}
});
