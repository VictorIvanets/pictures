import { Link } from 'react-router-dom'

export function NotFound() {
	return (
		<div className="notfound">
			<h1>404</h1>
			<h3 className="tacenter">
				<Link to="/">"наголовну"</Link>
			</h3>
		</div>
	)
}
