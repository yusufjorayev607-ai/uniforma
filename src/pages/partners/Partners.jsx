import { useTranslation } from 'react-i18next'
import { useFetch } from '../../hooks/useFetch'
import './partners.css'
function Partners() {
	const { data, isPending, error } = useFetch('/data/partners.json')
	const { t } = useTranslation()

	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	return (
		<div className='test'>
			<div className=' container'>
				{data && <h2 className='title'>{t('partners.title')}</h2>}
				<div className='partners'>
					{data &&
						data.partners.map(partner => (
							<div className='partners__item' key={partner.name}>
								<img
									src={partner.logo}
									alt={partner.name}
									width={100}
									className='partners__img'
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Partners
