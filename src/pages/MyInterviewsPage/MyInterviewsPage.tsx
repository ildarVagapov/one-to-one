import { Statistic } from "./components/Statistic/Statistic"
import { InterviewsModal, InterviewsTabs, QuestionModal } from "feature/index"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const MyInterviewsPage = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (typeof window !== 'undefined' && localStorage.getItem('id') === null) {
			navigate('/auth')
		}
	}, []);


	return (
		<>
			<Statistic />
			<InterviewsTabs />
			<InterviewsModal />
			<QuestionModal />
		</>
	)
}