import { IItem } from 'shared/types/IItems';
import { useRespondInterviewsMutation } from '../api/respondInterviewsApi';
import style from './SearchInterviewsItem.module.scss'
import { useGetUserIdQuery } from 'shared/api/userApi';
import { Loader } from 'shared/components';


interface ISearchItemProps {
	item: IItem
	myId: number
}

export const SearchInterviewItem = (props: ISearchItemProps) => {
	const [respondInterviews, { isLoading, isSuccess, isError }] = useRespondInterviewsMutation()
	const { item, myId } = props
	const { data } = useGetUserIdQuery(item.initiatorId)

	return (
		<ul className={style.items}>
			<li>{item.dateTime}</li>
			<li>{item.technology.name}</li>
			<li>{data?.name} {data?.surName}</li>
			<li>{item.level}</li>
			<button
				className={style.btn}
				onClick={() => respondInterviews({
					opponentId: myId,
					oneToOneId: item.id,
				})}
				disabled={isLoading || isSuccess || isError}
			>
				{isLoading && <Loader />}
				{isSuccess && 'Заявка отправлена'}
				{isError && 'Ошибка при отправке'}
				{!isLoading && !isSuccess && !isError && 'Откликнуться'}
			</button>
		</ul>
	);
};
