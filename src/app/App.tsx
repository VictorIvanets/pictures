import { AppRouter } from './Providers/router'
import { Suspense, useState } from 'react'
import { PreLoader } from '../widgets/PreLoader'
import Fon from '../shared/assets/fon.svg'
import { Navbar } from '../widgets/navbar'
import { Sidebar } from '../widgets/sidebar/ui/sidebar'

export function App() {
	const [hidden, setHidden] = useState(false)
	console.log(hidden)

	return (
		<main className="app">
			<Suspense fallback={<PreLoader />}>
				<div className="mainfonbox">
					<img className="mainfon" src={Fon} />
				</div>
				<Navbar />
				<Sidebar hidden={hidden} setHidden={setHidden} />

				<section className={`app__content ${hidden ? 'flexappcontent' : ''}`}>
					<AppRouter />
				</section>
			</Suspense>
		</main>
	)
}
