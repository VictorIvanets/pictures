import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { className } from '../../../shared/lib/helpers/classNames/classNames'

// srr in ts
export const Navbar = () => {
	const { leng, toggleLeng } = useLeng()
	console.log(leng)

	const lengFr = 'CHANGER LA LANGUE'
	const lengUa = 'ЗМІНИТИ МОВУ'
	const lengEn = 'CHANGE THE LANGUAGE'

	return (
		<>
			<nav className={className('navbar', {}, [])}>
				<img className="navbar__img" src={`/pictures/${leng}.png`} alt="flag" />

				<button onClick={() => toggleLeng()} className="navbar__lengbtn cyrillicbold">
					{leng === 'fr' ? lengFr : leng === 'ua' ? lengUa : lengEn}
				</button>
			</nav>
		</>
	)
}
