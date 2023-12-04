import { useSelector } from "react-redux"
import { useGetRespondedInfoQuery } from "./api/respondedApi"
import { myId } from "shared/api/myIdSlice"
import style from './Responded.module.scss'
import { RespondedIitem } from "./components/RespondedIitem"

export const Responded = () => {

	const { data, isSuccess, isError, isLoading } = useGetRespondedInfoQuery(useSelector(myId))

	return (
		<div className={style.content}>
			{isLoading && <p>Загрузка...</p>}
			{isSuccess && data?.items.map((item, i) => (
				<RespondedIitem key={i} item={item} />
			))}

			{isError && <p>Произошла ошибка при поиске</p>}
		</div>
	)
}