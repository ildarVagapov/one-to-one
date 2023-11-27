import { useSelector } from "react-redux"
import { useGetMyQuestionTabInfoQuery } from "shared/api/myQuestionTabApiInfo"
import { myId } from "shared/api/myIdSlice"
import style from './InterviewsWindowPage.module.scss'
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import { Accordion, AccordionBody, AccordionTitle } from "shared/components"

export const InterviewsWindowPage = () => {
	const { data, isSuccess, isLoading, isError } = useGetMyQuestionTabInfoQuery(useSelector(myId))
	const [value, setValue] = useState<string>('')


	return (
		<section className={style.interview}>
			<div className={style.searchBar}>
				<div className={style.search}>
					<input type="text" placeholder="Поиск вопросов" value={value} onChange={(e) => setValue(e.target.value)} />
					<FiSearch className={style.searchIcon} />
				</div>
				<div>
					{isLoading && <p>Loading...</p>}
					{isSuccess && data?.items.filter((item) => item.answer.toLowerCase().includes(value?.toLowerCase()) || item.technology?.name.toLowerCase().includes(value?.toLowerCase())).map((item, i) => (
						<ul key={i} className={style.questionItem}>
							<li className={style.stack}>{item.technology?.name}</li>
							<li>{item.question}</li>
						</ul>))}
					{isError && <p>Произошла ошибка</p>}
				</div>
			</div>
			<div className={style.content}>
				<header className={style.header}>header</header>
				<div className={style.items}>
					{data?.items.map((item, i) => (
						<Accordion key={i}>
							<AccordionTitle id={item.id}>
								<div className={style.item}>
									<p className={style.stack}>{item.technology?.name}</p>
									<p>{item.question}</p>
								</div>
								<div className={style.rating}>
									8888888
								</div>
							</AccordionTitle >
							<AccordionBody id={item.id}>
								<div className={style.body}>
									{item.answer}
									<textarea placeholder="Введите комментарий к ответу" className={style.textarea} ></textarea>
								</div>
							</AccordionBody>
						</Accordion>
					))}
				</div>
			</div>
		</section >
	)
}