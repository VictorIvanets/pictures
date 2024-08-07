import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { className } from '../../../shared/lib/helpers/classNames/classNames'

// srr in ts
export const Navbar = () => {
	const { leng, toggleLeng } = useLeng()
	console.log(leng)

	const lengFr = 'FR CHANGER LA LANGUE'
	const lengUa = 'UA ЗМІНИТИ МОВУ'
	const lengEn = 'EN CHANGE ENG LANGUAGE'

	return (
		<>
			<nav className={className('navbar', {}, [])}>
				<div>
					<button onClick={() => toggleLeng()} className="navbar__lengbtn">
						{leng === 'fr' ? lengFr : leng === 'ua' ? lengUa : lengEn}
					</button>
				</div>
			</nav>
		</>
	)
}
