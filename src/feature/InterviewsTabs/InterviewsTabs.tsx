import { Tabs } from "shared/components"
import { MyInterviews } from "./components/MyInterviews/MyInterviews"
import { MyStatistics } from "./components/MyStatistics/MyStatistics"
import { MyQuestions } from "./components/MyQuestions/MyQuestions"
import { SearchInterviews } from "./components/SearchInterviews/SearchInterviews"


export const InterviewsTabs = () => {


	const tabs = [
		{ id: 1, title: `Мои собеседования (0)`, component: <MyInterviews />, popap: true },
		{ id: 2, title: 'Поиск собеседований', component: <MyQuestions />, },
		{ id: 3, title: 'Мои вопросы (0)', component: <MyStatistics />, popap: true },
		{ id: 4, title: 'Моя статистика', component: <SearchInterviews />, },
	]

	return (
		<>
			<Tabs tabs={tabs} />
		</>
	)
}