window.app = new Vue({
	el: '#app',
	data: {
		mods: [],
		lastSort: ''
	},
	methods: {
		maintainerUrl(mod) {
			if(mod.maintainerUrl) return mod.maintainerUrl

			const match = /^https:\/\/github\.com\/[^/]+/.exec(mod.url)
			return match && match[0]
		},

		sortBy(key) {
			const order = this.lastSort === key ? -1 : 1
			this.mods = this.mods.sort((a, b) => a[key].localeCompare(b[key]) * order)
			this.lastSort = order === -1 ? '' : key
		}
	},
	async mounted() {
		this.mods = await (await fetch(`mods.json`)).json()
		this.sortBy('name')
	}
})