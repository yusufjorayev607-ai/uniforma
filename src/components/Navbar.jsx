import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
	return (
		<header className='header container'>
			<div className='header__logo'>
				<Link>
					<img src='/image/ELEGAND_logo.svg' alt='' width={50} />
				</Link>
			</div>
			<nav className='header__nav'>
				<NavLink to='/' className='header__nav-link'>
					BIZ HAQIMIZDA
				</NavLink>
				<NavLink to='/' className='header__nav-link'>
					XIZMATLAR
				</NavLink>
				<NavLink to='/' className='header__nav-link'>
					JARAYON
				</NavLink>
				<NavLink to='/portfolio' className='header__nav-link'>
					PORTFOLIO
				</NavLink>
				<NavLink to='/' className='header__nav-link'>
					HAMKORLAR
				</NavLink>
				<NavLink to='/' className='header__nav-link'>
					KONTAKT
				</NavLink>
			</nav>
			<div className='header__mode'>
				<ThemeToggle />
			</div>
		</header>
	)
}

export default Navbar
