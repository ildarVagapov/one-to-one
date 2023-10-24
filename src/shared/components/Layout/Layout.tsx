import { Header } from "widgets/Header/Header"
import { Outlet } from "react-router-dom"

export const Layout = () => {

	return (
		<>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
		</>
	)
}