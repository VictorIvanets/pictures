import { ComponentType } from 'react'
import { FallbackProps } from 'react-error-boundary'

export function ErrorBoundarie(props: any) {
	console.log(props)

	const reloadPage = () => {
		location.reload()
	}
	// reloadPage()

	return (
		<div role="alert">
			<p> Что-то пошло не так: </p>
			<h1 style={{ color: 'red' }}>ERROR</h1>
			<button onClick={reloadPage}>RELOAD</button>
		</div>
	)
}
