import About from './about/About'
import Contact from './contact/Contact'
import Form from './form/form'
import Home from './home/Home'
import Partners from './partners/Partners'
import Portfolio from './portfolio/Portfolio'
import Process from './process/Process'
import Services from './services/Services'
import Stats from './stats/Stats'

function Pages() {
	return (
		<>
			<Home />
			<hr className='hr' />
			<Partners />
			<hr className='hr' />
			<Services />
			<hr className='hr' />
			<Portfolio />
			<hr className='hr' />
			<About />
			<hr className='hr' />
			<Process />
			<hr className='hr' />
			<Stats />
			<hr className='hr' />
			<Contact />
			<hr className='hr' />
			<Form />
		</>
	)
}

export default Pages
