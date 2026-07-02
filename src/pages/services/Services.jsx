import { useTranslation } from 'react-i18next'
import { useFetch } from '../../hooks/useFetch'
import './services.css'

function Services() {
	const { t } = useTranslation()
	const { data, isPending, error } = useFetch('/data/services.json')

	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	return (
		<>
			{data && <h2 className='title'>{t('services.title')}</h2>}
			<div className='services__test container' id='services'>
				{data &&
					data.services.map(service => (
						<div className='services container' key={service.id}>
							<div className='services__img'>
								<img
									src={service.image}
									alt={t(`services.${service.slug}.title`)}
									width={300}
								/>
							</div>
							<div className='services__item'>
								<h2 className='services__title'>
									{t(`services.${service.slug}.title`)}
								</h2>
								<p className='services__info'>
									{' '}
									{t(`services.${service.slug}.description`)}
								</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default Services
