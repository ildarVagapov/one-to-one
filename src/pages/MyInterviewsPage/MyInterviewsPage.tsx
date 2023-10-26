import { Tabs } from "widgets/Tabs/Tabs"
import { Statistic } from "./components/Statistic/Statistic"
import { InterviewsModal } from "feature/index"

export const MyInterviewsPage = () => {


	return (
		<>
			<Statistic />
			{/* <Tabs /> */}
			<InterviewsModal />
		</>
	)
}