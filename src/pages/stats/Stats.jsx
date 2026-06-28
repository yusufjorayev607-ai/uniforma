import { useFetch } from '../../hooks/useFetch'
import './stats.css'
function Stats() {
	const { data } = useFetch('public/data/stats.json')

	return (
		<>
			{data && <h2 className='stats__title title'>{data.title}</h2>}
			<section className='stats container'>
				{data &&
					data.stats.map(item => {
						return (
							<div className='stats__card' key={item.label}>
								<img
									src={item.icon}
									alt={item.label}
									className='stats__card-img'
									width={60}
									height={60}
								/>
								<h3 className='stats__card-value'>{item.value}</h3>
								<span className='stats__card-label'>{item.label}</span>
							</div>
						)
					})}
			</section>
		</>
	)
}

export default Stats
