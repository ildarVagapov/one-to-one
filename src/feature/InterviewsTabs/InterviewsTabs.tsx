import { Tabs } from "shared/components"
import { MyInterviews } from "./components/MyInterviews/MyInterviews"
import { MyStatistics } from "./components/MyStatistics/MyStatistics"
import { SearchInterviews } from "./components/SearchInterviews/SearchInterviews"
import { useGetMyInterviewsTabInfoQuery } from "./components/MyInterviews/api/myInterviewsTabApi"
import { useGetMyQuestionTabInfoQuery } from "../../shared/api/myQuestionTabApiInfo"
import { useSelector } from "react-redux"
import { myId } from "shared/api/myIdSlice"
import { MyQuestions } from "./components/MyQuestion/MyQuestions"
import { Responded } from "./components/Responded/Responded"
import { useGetRespondedInfoQuery } from "./components/Responded/api/respondedApi"


export const InterviewsTabs = () => {
	const { data: dataInterviews, isSuccess: successInterv } = useGetMyInterviewsTabInfoQuery(useSelector(myId))
	const { data: dataQuestion, isSuccess: successQuest } = useGetMyQuestionTabInfoQuery(useSelector(myId))
	const { data: dataResponded, isSuccess: sucRes } = useGetRespondedInfoQuery(useSelector(myId))

	const tabs = [
		{ id: 1, title: `Мои собеседования (${successInterv ? dataInterviews?.totalItems : 0})`, component: <MyInterviews />, popap: true },
		{ id: 2, title: 'Поиск собеседований', component: <SearchInterviews />, },
		{ id: 3, title: `Мои вопросы (${successQuest ? dataQuestion?.totalItems : 0})`, component: <MyQuestions />, popap: true },
		{ id: 4, title: 'Моя статистика', component: <MyStatistics />, },
		{ id: 5, title: `Откликнулся (${sucRes ? dataResponded.totalItems : 0})`, component: <Responded />, },
	]

	return (
		<>
			<Tabs tabs={tabs} />
		</>
	)
}