import { Statistic } from "./components/Statistic/Statistic"
import { InterviewsModal, InterviewsTabs, QuestionModal } from "feature/index"

export const MyInterviewsPage = () => {


	return (

		<>
			<Statistic />
			<InterviewsTabs />
			<InterviewsModal />
			<QuestionModal />
		</>
	)
}