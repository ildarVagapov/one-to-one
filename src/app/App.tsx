import { MyInterviewsPage } from 'pages/MyInterviewsPage/MyInterviewsPage'
import { RatingPage } from 'pages/RatingPage/RatingPage'
import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import { AuthPage } from 'pages/AuthPage/AuthPage'
import { Layout } from 'shared/components'
import { InterviewsWindowPage } from 'pages/InterviewsWindowPage/InterviewsWindowPage'
// import { FeedbackPage } from 'pages/FeedbackPage/FeedbackPage'


export const App = () => {

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/registration' element={< RegistrationPage />} />
				<Route path='/auth' element={< AuthPage />} />
				<Route path='/' element={<Layout />}>
					<Route index element={< MyInterviewsPage />} />
					<Route path='/rating' element={< RatingPage />} />
					{/* <Route path='/feed-back' element={< FeedbackPage />} /> */}
					<Route path='/interviews-window' element={< InterviewsWindowPage />} />
				</Route>
			</Routes>
		</div>
	)
}

