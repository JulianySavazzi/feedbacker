export function removeCookie(tabs, cookie) {
	let removing = browser.cookies.remove({
		url: tabs[0].url,
		name: cookie,
	})

	removing.then(
		response => {
			console.log(response)
		}
	);

	let getActive = browser.tabs.query({ active: true, currentWindow: true })

	getActive.then(removeCookie)
}