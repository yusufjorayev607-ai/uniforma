import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/usefetch'
import './portfolio.css'
function Portfolio() {
	const { data, isPending, error } = useFetch('public/data/portfolio.json')

	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	return (
		<div className='portfolio container'>
			<h2 className='title'>PORTFOLIO</h2>
			<div className='portfolio__image'>
				{data &&
					data.portfolio.slice(0, 5).map(item => {
						return (
							<div className='portfolio__image-item' key={item.id}>
								<img
									src={item.image}
									alt={item.image}
									className='portfolio__image-img'
								/>
							</div>
						)
					})}
			</div>
			<Link to='portfolio' className='portfolio__btn'>
				BARCHA ISHLARIMIZNI KO'RISH
			</Link>
		</div>
	)
}

export default Portfolio
