import { useContext } from 'react'
import { LOCAL_STORAGE_LENG_KEY, Leng, LengContext } from './LengContext'

interface UseThemeResult {
	toggleLeng: () => void
	leng: Leng
}

export function useLeng(): UseThemeResult {
	const { leng, setLeng } = useContext(LengContext)

	const toggleLeng = () => {
		let newLeng: Leng
		switch (leng) {
			case Leng.FR:
				newLeng = Leng.EN
				break
			case Leng.EN:
				newLeng = Leng.UA
				break
			case Leng.UA:
				newLeng = Leng.FR
				break
			default:
				newLeng = Leng.FR
		}

		setLeng?.(newLeng)
		localStorage.setItem(LOCAL_STORAGE_LENG_KEY, newLeng)
	}

	return {
		leng: leng || Leng.FR,
		toggleLeng,
	}
}
