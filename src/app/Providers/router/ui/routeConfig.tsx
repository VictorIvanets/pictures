import { AboutPage } from '../../../../pages/AboutPage/index'
import { ArticlesPage } from '../../../../pages/ArticlesPage/index'
import { MainPage } from '../../../../pages/MainPage/index'
import { RouteProps } from 'react-router-dom'
import { PreLoader } from '../../../../widgets/PreLoader'
import { NotFound } from '../../../../widgets/not_found'
import { SwiperPage } from '../../../../pages/Swiper'
import { BigPic } from '../../../../widgets/bigpic'

export type AppRouterProps = RouteProps & {
	path: string
	children?: undefined
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	LOADER = 'load',
	ART = 'art',
	SWIPER = 'swiper',
	BIG = 'big',
	NOTFOUND = 'notfound',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.LOADER]: '/load',
	[AppRoutes.ART]: '/art',
	[AppRoutes.SWIPER]: '/swiper',
	[AppRoutes.BIG]: '/big',
	[AppRoutes.NOTFOUND]: '/*',
}

export const routerConfig: Record<AppRoutes, AppRouterProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ART]: {
		path: `${RoutePath.art}/:section`,
		element: <ArticlesPage />,
	},
	[AppRoutes.BIG]: {
		path: `${RoutePath.big}/:id`,
		element: <BigPic />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.LOADER]: {
		path: RoutePath.load,
		element: <PreLoader />,
	},

	[AppRoutes.SWIPER]: {
		path: `${RoutePath.swiper}/:section`,
		element: <SwiperPage />,
	},

	[AppRoutes.NOTFOUND]: {
		path: RoutePath.notfound,
		element: <NotFound />,
	},
}
