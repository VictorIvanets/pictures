import { useSelector } from 'react-redux'
import { Navigate, Route, useLocation } from 'react-router-dom'
import { RoutePath } from './routeConfig'

// export function RequireAuth({ children }: { children: JSX.Element }) {
// 	let location = useLocation()

// 	if (!auth) {
// 		return <Navigate to={RoutePath.main} state={{ from: location }} replace />
// 	}
// 	return children
// }
