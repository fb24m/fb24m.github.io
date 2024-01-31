class Component extends HTMLElement {
	static define(tag = 'html-element') {
		customElements.define(tag, this)
	}
	connectedCallback() {
		this.start()

		const content = this.innerHTML;

		this.insertAdjacentHTML('afterend', `<${this.getAttribute('tag')}>
		${this.getAttribute('children')}
		</${this.getAttribute('tag')}>`)

		this.remove()
	}
	start() {
		console.log('hello')
	}
}
Component.define()