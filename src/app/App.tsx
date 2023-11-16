import { FeedBackPage } from 'pages/FeedbackPage/FeedBackPage'
import { MyInterviewsPage } from 'pages/MyInterviewsPage/MyInterviewsPage'
import { RatingPage } from 'pages/RatingPage/RatingPage'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import { AuthPage } from 'pages/AuthPage/AuthPage'
import { Layout } from 'shared/components'
import { useEffect } from 'react'


export const App = () => {

	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('access') === null) {
			navigate('/auth')
		}
	}, [navigate]);

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

