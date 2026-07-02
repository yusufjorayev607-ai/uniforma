import { useTranslation } from 'react-i18next'
import { useFetch } from '../../hooks/useFetch'
import './stats.css'
function Stats() {
	const { data } = useFetch('/data/stats.json')
	const { t } = useTranslation()
	return (
		<>
			{data && <h2 className='stats__title title'>{t('stats.title')}</h2>}
			<section className='stats container'>
				{data &&
					data.stats.map((item, index) => {
						return (
							<div className='stats__card' key={item.value}>
								<img
									src={item.icon}
									alt={item.label}
									className='stats__card-img'
									width={60}
									height={60}
								/>
								<h3 className='stats__card-value'>{item.value}</h3>
								<span className='stats__card-label'>
									{t(
										[
											'stats.projects',
											'stats.clothes',
											'stats.partners',
											'stats.satisfaction',
										][index],
									)}
								</span>
							</div>
						)
					})}
			</section>
		</>
	)
}

export default Stats
