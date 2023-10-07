import { Routes, Route } from 'react-router-dom'
import { MyInterviewsPage } from '../pages/MyInterviewsPage/MyInterviewsPage'
import { RatingPage } from '../pages/RatingPage/RatingPage'
import { Header } from '../widgets/Header/Header'


export const App = () => {

	return (
		<>
			<div className='wrapper'>
				<Header />
				<main className='main'>
					<Routes>
						<Route path='/' element={< MyInterviewsPage />} />
						<Route path='/rating' element={< RatingPage />} />
					</Routes>
				</main>
			</div>
		</>
	)
}

