import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import LengProvider from './app/Providers/ChangeLeng/LengProvider'
import { ErrorBoundarie } from './app/Providers/Error/ErrorBoundarie'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter
		// basename="pic"
		>
			<ErrorBoundary FallbackComponent={ErrorBoundarie}>
				<LengProvider>
					<App />
				</LengProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>,
)
