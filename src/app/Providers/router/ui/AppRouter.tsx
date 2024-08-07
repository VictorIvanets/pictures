import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouterProps, routerConfig } from './routeConfig'
import { PreLoader } from '../../../../widgets/PreLoader/index' //'../..widgets/PreLoader/index'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRouterProps) => {
		const element = <Suspense fallback={<PreLoader />}>{route.element}</Suspense>
		return <Route key={route.path} path={route.path} element={element} />
	}, [])

	return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
