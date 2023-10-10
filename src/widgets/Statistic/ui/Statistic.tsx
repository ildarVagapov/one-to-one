import style from './Statistic.module.scss'

export const Statistic = () => {
	return (
		<div className={style.statistic}>
			<div className={style.statistic__items}>
				<div className={style.statistic__subtitle}>Оценки пользователей</div>
				<div className={style.statistic__item}>
					<div className={style.statistic__title}>4,4</div>
					<div className={style.statistic__icon}>
						<img src="/public/assets/iconStatistic.svg" alt="" />
					</div>
				</div>
			</div>
			<div className={style.statistic__items}>
				<div className={style.statistic__subtitle}>Пройдено собесований</div>
				<div className={style.statistic__title}>3</div>
			</div>
			<div className={style.statistic__items}>
				<div className={style.statistic__subtitle}>Набрано баллов</div>
				<div className={style.statistic__title}>2</div>
			</div>
			<div className={style.statistic__items}>
				<div className={style.statistic__subtitle}>Задано вопросов</div>
				<div className={style.statistic__title}>2</div>
			</div>
		</div>
	)
}