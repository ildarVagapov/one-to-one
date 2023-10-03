// import { HomePage } from 'pages/HomePage/HomePage'
import { HomePage } from 'pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'


export const App = () => {

	return (
		<>
			<div>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</div>
		</>
	)
}

