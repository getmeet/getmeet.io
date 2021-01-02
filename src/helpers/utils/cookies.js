const docCookies = {
	getItem(sKey) {
		if (!sKey) {
			return null;
		}
		return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${
			/* eslint-disable-next-line no-useless-escape */
			encodeURIComponent(sKey).replace(/[\-\.\+\*]/g,
				'\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1'))
      || null;
	},
}

export {docCookies}
