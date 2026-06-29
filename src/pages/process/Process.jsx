import { useFetch } from '../../hooks/useFetch'
import './process.css'

function Process() {
	const { data } = useFetch('/data/process.json')

	return (
		<section className='process container'>
			<h2 className='process__title title'>BUYURTMA JARAYONI</h2>

			<div className='process__wrapper'>
				{data &&
					data.steps.map(item => (
						<div className='process__item' key={item.step}>
							<div className='process__circle'>
								<img
									src={item.icon}
									alt={item.title}
									className='process__icons'
								/>
							</div>
							<span className='process__number'>{item.step}</span>
							<p className='process__text'>{item.title}</p>
						</div>
					))}
			</div>
		</section>
	)
}

export default Process
