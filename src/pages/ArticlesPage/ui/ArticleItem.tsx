import { Link, useParams } from 'react-router-dom'
import { IImg } from '../../../shared/leng-lib/picleng'

const ArticleItem = (props: IImg) => {
	const { id, name, size, year } = props
	const { section } = useParams()
	console.log(section)
	return (
		<div className="articles-item">
			<div className="articles-item__picbox">
				<Link to={`/big/${id}`}>
					{<img className="articles-item__picbox__pic" src={`/pictures/bigl_${id}.jpg`} alt="" />}
				</Link>
			</div>
			<div>
				<h3 className="colorLight">{name}</h3>
				<h4 className="colorLight">{year}</h4>
				<h4 className="colorLight">{size}</h4>
			</div>
		</div>
	)
}

export default ArticleItem
