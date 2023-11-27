import { useGetSearchInterviewsQuery } from "./api/searchInterviewsApi"
import style from './SearchInterviews.module.scss'
import { myId } from "shared/api/myIdSlice"
import { useSelector } from "react-redux"
import { SearchInterviewItem } from "./components/SearchInterviewsItem"


export const SearchInterviews = () => {
	const { data, isLoading, isSuccess, isError } = useGetSearchInterviewsQuery();
	const id = useSelector(myId);

	return (
		<div className={style.search}>
			<div className={style.content}>
				{isLoading && <p>Загрузка...</p>}
				{isSuccess && data?.items.filter(item => item.initiatorId !== id).map((item, i) => (
					<SearchInterviewItem key={i} item={item} myId={id} />
				))}
				{isError && <p>Произошла ошибка при поиске</p>}
			</div>
		</div>
	)
}

