import { Header } from "widgets/Header/Header"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Layout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('id') === null) {
			navigate('/auth')
		}
	}, [])

	return (
		<>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
		</>
	)
}