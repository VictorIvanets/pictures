import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { memo, useEffect, useState } from 'react'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import ArticleItem from './ArticleItem'
import { NavLink, useParams } from 'react-router-dom'

export const ArticlesPage = memo(() => {
	const { leng } = useLeng()
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	const [actualPage, setActualPage] = useState(0)
	const { id } = useParams()
	// const { search } = useLocation()
	// const navigate = useNavigate()

	console.log(id)

	useEffect(() => {
		if (id === 'micro') {
			setActualPage(0)
		}
		if (id === 'macro') {
			setActualPage(1)
		}
	}, [id])

	return (
		<article className="articles">
			<div className="articles__text">
				<NavLink className="sidebar__linkbox__link" to={`/art/${'micro'}`}>
					{data[0].title}
				</NavLink>
				<NavLink className="sidebar__linkbox__link" to={`/art/${'macro'}`}>
					{data[1].title}
				</NavLink>
			</div>
			<div className="articles__itembox">
				{data[actualPage].img.map((i) => (
					<ArticleItem key={i.id} id={i.id} size={i.size} year={i.year} name={i.name} />
				))}
			</div>
		</article>
	)
})

export default ArticlesPage
