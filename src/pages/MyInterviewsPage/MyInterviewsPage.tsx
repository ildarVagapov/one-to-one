import { Tabs } from "widgets/Tabs/Tabs"
import { Statistic } from "./components/Statistic/Statistic"
import { InterviewsModal } from "feature/index"

export const MyInterviewsPage = () => {
	const SearchInterviews = () => {
		return (
			<div>поиск собесов</div>
		)
	}
	const MyQuestions = () => {
		return (
			<div>мои вопросы</div>
		)
	}
	const MyStatistics = () => {
		return (
			<div>моя статистика</div>
		)
	}
	const tabs = [
		{ id: 1, title: `Мои собеседования (0)`, component: <SearchInterviews />, popap: true },
		{ id: 2, title: 'Поиск собеседований', component: <MyQuestions />, },
		{ id: 3, title: 'Мои вопросы (0)', component: <MyStatistics />, popap: true },
		{ id: 4, title: 'Моя статистика', component: <SearchInterviews />, },
	]




	return (

		<>
			<Statistic />
			<Tabs tabs={tabs} />
			{/* <InterviewsModal /> */}
		</>
	)
}