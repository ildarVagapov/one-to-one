import { useSelector } from 'react-redux';
import { useGetStatisticQuery } from '../api/statisticApi';
import style from './Statistic.module.scss'
import { FiStar } from "react-icons/fi";
import { userId } from 'shared/api/userIdSlice';

export const Statistic = () => {

	const { data, isSuccess } = useGetStatisticQuery(useSelector(userId))

	const dataArr = [
		{
			title: 'Оценки пользователей',
			count: 0,
			icon: true,
		},
		{
			title: 'Пройдено собеседований',
			count: isSuccess ? data?.totalOneToOneCount : 0,
		},
		{
			title: 'Набрано баллов',
			count: isSuccess ? data?.totalPoint : 0,
		},
		{
			title: 'Задано вопросов',
			count: isSuccess ? data?.totalQuestionCount : 0,
		},
	];

	return (
		<div className={style.statistic}>
			{dataArr.map((item, index) => (
				<div key={index} className={style.statistic__items}>
					<div className={style.statistic__subtitle}>{item.title}</div>
					<div className={style.statistic__item}>
						<div className={style.statistic__title}>{item.count}</div>
						{item.icon && <FiStar className={style.statistic__icon} />}
					</div>
				</div>
			))}
		</div>
	)
}