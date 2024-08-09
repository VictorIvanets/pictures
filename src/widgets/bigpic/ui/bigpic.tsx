import { useNavigate, useParams } from 'react-router-dom'

const Bigpic = () => {
	const { id } = useParams()
	const navigator = useNavigate()

	return (
		<div
			onClick={(e) => {
				navigator(-1)
			}}
			onKeyDown={(e) => console.log(e)}
			className="bigpic"
		>
			<div className="bigpic__picbox">
				{<img className="bigpic__pic" src={`/pictures/bigl_${id}.jpg`} alt={`bigl_${id}.jpg`} />}
			</div>
		</div>
	)
}

export default Bigpic
