import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_LENG_KEY, Leng, LengContext } from './LengContext'

const defaultLeng = (localStorage.getItem(LOCAL_STORAGE_LENG_KEY) as Leng) || Leng.FR
type ContextProviderProps = {
	children?: ReactNode
}

interface LengProviderProps {
	initialLeng?: Leng
	children: ReactNode
}

const LengProvider: FC<LengProviderProps> = (props) => {
	const { initialLeng, children } = props

	const [leng, setLeng] = useState<Leng>(initialLeng || defaultLeng)

	const defaulProps = useMemo(
		() => ({
			leng: leng,
			setLeng: setLeng,
		}),
		[leng],
	)

	return <LengContext.Provider value={defaulProps}>{children}</LengContext.Provider>
}

export default LengProvider
