window.app = new Vue({
	el: '#app',
	data: {
		mods: [{
			url: 'https://github.com/tera-mods/skill-prediction',
			name: 'Skill Prediction',
			author: 'Pinkie Pie',
			description: 'Simulates skills client-side, eliminating ping-based delays and animation lock.'
		}]
	}
})