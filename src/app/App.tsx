import { FeedBackPage } from 'pages/FeedbackPage/FeedBackPage'
import { MyInterviewsPage } from 'pages/MyInterviewsPage/MyInterviewsPage'
import { RatingPage } from 'pages/RatingPage/RatingPage'
import { Layout } from 'shared/components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import { AuthPage } from 'pages/AuthPage/AuthPage'



export const App = () => {

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/registration' element={< RegistrationPage />} />
				<Route path='/auth' element={< AuthPage />} />
				<Route path='/' element={<Layout />}>
					<Route index element={< MyInterviewsPage />} />
					<Route path='/rating' element={< RatingPage />} />
					<Route path='/feed-back' element={< FeedBackPage />} />
				</Route>
			</Routes>
		</div>
	)
}

