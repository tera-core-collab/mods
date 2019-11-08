window.app = new Vue({
	el: '#app',
	data: {
		mods: []
	},
	async mounted() { this.mods = (await fetch(`mods.json`)).json() }
})