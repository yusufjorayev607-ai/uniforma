import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AdminForm1 from './admin/pages/AdminForm1'
import AdminForm2 from './admin/pages/AdminForm2'
import AdminLayout from './layout/AdminLayout'
import MainLayout from './layout/MainLayout'
import Pages from './pages/Pages'
import PortfolioPage from './pages/portfolio/PortfolioPage'
function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Pages />,
				},
				{
					path: 'portfoliopage',
					element: <PortfolioPage />,
				},
			],
		},
		{
			path: '/adminca',
			element: <AdminLayout />,
			children: [
				{
					path: 'portfolio1',
					element: <AdminForm1 />,
				},
				{
					path: 'portfolio2',
					element: <AdminForm2 />,
				},
			],
		},
	])
	return <RouterProvider router={routes} />
}

export default App
