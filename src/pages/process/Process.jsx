import { useTranslation } from 'react-i18next'
import { useFetch } from '../../hooks/useFetch'
import './process.css'

function Process() {
	const { data } = useFetch('/data/process.json')
	const { t } = useTranslation()
	return (
		<section className='process container'>
			{data && <h2 className='process__title title'>{t('process.title')}</h2>}

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
							<p className='process__text'>{t(`process.step${item.step}`)}</p>
						</div>
					))}
			</div>
		</section>
	)
}

export default Process
