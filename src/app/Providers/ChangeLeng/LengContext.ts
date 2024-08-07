import { createContext } from 'react'

export enum Leng {
	UA = 'ua',
	EN = 'en',
	FR = 'fr',
}

export interface LengContextProps {
	leng?: Leng
	setLeng?: (leng: Leng) => void
}

export const LengContext = createContext<LengContextProps>({})

export const LOCAL_STORAGE_LENG_KEY = 'Leng'
