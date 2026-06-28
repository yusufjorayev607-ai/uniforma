import { Outlet } from 'react-router-dom'
import AdminNavbar from '../admin/components/AdminNavbar'
import AdminFooter from '../admin/components/AdminFooter'

function AdminLayout() {
	return (
		<>
			<AdminNavbar />
			<main>
				<Outlet />
			</main>
			<AdminFooter />
		</>
	)
}

export default AdminLayout
