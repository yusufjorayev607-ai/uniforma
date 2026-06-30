import { useFetch } from '../../hooks/useFetch'
import './services.css'

function Services() {
	const { data, isPending, error } = useFetch('/data/services.json')

	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	return (
		<>
			{data && <h2 className='title'>{data.title}</h2>}
			<div className='services__test container'>
				{data &&
					data.services.map(service => (
						<div className='services container' key={service.id}>
							<div className='services__img'>
								<img src={service.image} alt='' width={300} />
							</div>
							<div className='services__item'>
								<h2 className='services__title'>{service.title}</h2>
								<p className='services__info'> {service.description}</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default Services
