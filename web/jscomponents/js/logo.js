var root = document.body
var count = 0 // added a variable

var Hello = {
	view: function() {
		return m("main", [
			m("h1", {
				class: "title"
			}, "My first app"),
			m("button", {
				onclick: function() {count++}
			}, count + " clicks")
		])
	}
}

m.mount(root, Hello)