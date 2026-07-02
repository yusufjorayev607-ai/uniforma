import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

function Navbar() {
	const { t } = useTranslation()
	return (
		<header className='header container'>
			<div className='header__logo'>
				<Link>
					<img src='/image/ELEGAND_logo.svg' alt='' width={50} />
				</Link>
			</div>
			<nav className='header__nav'>
				<HashLink smooth to='/#about' className='header__nav-link'>
					{t('header.about')}
				</HashLink>
				<HashLink smooth to='/#services' className='header__nav-link'>
					{t('header.services')}
				</HashLink>
				<HashLink smooth to='/#contact' className='header__nav-link'>
					{t('header.contact')}
				</HashLink>
				<HashLink smooth to='/portfoliopage' className='header__nav-link'>
					{t('header.portfolio')}
				</HashLink>
			</nav>
			<div className='header__mode'>
				<LanguageSwitcher />
				<ThemeToggle />
			</div>
		</header>
	)
}

export default Navbar
