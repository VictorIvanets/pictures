import { useEffect, useState } from 'react'

export function useChangeLeng<T>(lengsel: string, ua: T[], en: T[], fr: T[]): T[] {
	const [leng, setLeng] = useState(ua)

	function Leng(lengsel: string) {
		if (lengsel === 'ua') {
			setLeng(ua)
		}
		if (lengsel === 'en') {
			setLeng(en)
		}
		if (lengsel === 'fr') {
			setLeng(fr)
		}
	}

	useEffect(() => {
		Leng(lengsel)
	}, [lengsel])

	return leng
}
